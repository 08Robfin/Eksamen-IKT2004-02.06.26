// Hele server.js er skrevet av KI

const express = require('express');
const pool = require('./db');
const app = express();

app.set('view engine', 'ejs');     // si til Express: bruk EJS for HTML
app.use(express.static('public')); // server CSS/bilder fra /public

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

app.listen(3000, () => console.log('Kjører på http://localhost:3000'));