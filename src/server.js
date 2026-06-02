// Hele server.js er skrevet av KI

const express = require('express');
const pool = require('./db');
const app = express();

app.set('view engine', 'ejs');     // si til Express: bruk EJS for HTML
app.use(express.static('public')); // server CSS/bilder fra /public
app.use(express.urlencoded({ extended: true })); // les skjemadata inn i req.body

// KUNDESIDEN: liste over ALLE produkter
app.get('/', async (req, res) => {
  const resultat = await pool.query('SELECT * FROM produkter ORDER BY id');
  res.render('liste', { produkter: resultat.rows });
});

// DETALJVISNING: ETT produkt, basert på id i URL-en
app.get('/produkt/:id', async (req, res) => {
  const id = req.params.id;
  const resultat = await pool.query(
    'SELECT * FROM produkter WHERE id = $1', [id]
  );

  if (resultat.rows.length === 0) {
    return res.status(404).send('Fant ikke produktet');
  }

  res.render('detalj', { produkt: resultat.rows[0] });
});

// ===== ADMIN =====

// READ: liste med rediger/slett-knapper
app.get('/admin', async (req, res) => {
  const r = await pool.query('SELECT * FROM produkter ORDER BY id');
  res.render('admin/liste', { produkter: r.rows });
});

// Vis tomt skjema for nytt produkt
app.get('/admin/ny', (req, res) => {
  res.render('admin/skjema', { produkt: null });
});

// CREATE: lagre nytt produkt
app.post('/admin/ny', async (req, res) => {
  const { produktnavn, pris, beskrivelse, bilde } = req.body;
  await pool.query(
    'INSERT INTO produkter (produktnavn, pris, beskrivelse, bilde) VALUES ($1, $2, $3, $4)',
    [produktnavn, pris, beskrivelse, bilde]
  );
  res.redirect('/admin');
});

// Vis forhåndsfylt skjema for redigering
app.get('/admin/:id/rediger', async (req, res) => {
  const r = await pool.query('SELECT * FROM produkter WHERE id = $1', [req.params.id]);
  res.render('admin/skjema', { produkt: r.rows[0] });
});

// UPDATE: lagre endringer
app.post('/admin/:id/rediger', async (req, res) => {
  const { produktnavn, pris, beskrivelse, bilde } = req.body;
  await pool.query(
    'UPDATE produkter SET produktnavn=$1, pris=$2, beskrivelse=$3, bilde=$4 WHERE id=$5',
    [produktnavn, pris, beskrivelse, bilde, req.params.id]
  );
  res.redirect('/admin');
});

// DELETE: slett produkt
app.post('/admin/:id/slett', async (req, res) => {
  await pool.query('DELETE FROM produkter WHERE id = $1', [req.params.id]);
  res.redirect('/admin');
});

function kunLokaltNett(req, res, next) {
  const ip = req.ip; // f.eks. ::1, 127.0.0.1 eller 192.168.1.42

  const erLokal =
    ip === '::1' ||                      // IPv6 localhost
    ip === '127.0.0.1' ||                // IPv4 localhost
    ip.startsWith('::ffff:127.') ||      // IPv4 mappet i IPv6
    ip.startsWith('192.168.') ||         // privat LAN
    ip.startsWith('::ffff:192.168.') ||
    ip.startsWith('10.') ||              // privat LAN
    ip.startsWith('::ffff:10.');

  if (erLokal) {
    next(); // alt ok → fortsett til admin-ruta
  } else {
    res.status(403).send('Tilgang nektet – admin er kun for bedriftens nett.');
  }
}

app.listen(3000, () => console.log('Kjører på http://localhost:3000'));