-- første tabell hentet og redigert fra: https://tangen-2it-utvikling.netlify.app/content/database-01# | 01. 06. 26
CREATE TABLE Produkter (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Produktnavn VARCHAR(100) NOT NULL,
    Pris DECIMAL(10, 2) NOT NULL,
    Beskrivelse VARCHAR(255),
    Bilde VARCHAR(255)
);

INSERT INTO produkter (Produktnavn, Pris, Beskrivelse, Bilde) VALUES ('Roser', 29.99, 'En bukett med vakre roser, Pakken inneoholder 3 roser.', 'roser.webp');

UPDATE produkter SET Bilde = 'roser.webp' WHERE Produktnavn = 'Roser';

DELETE FROM produkter WHERE Produktnavn = 'Roser';