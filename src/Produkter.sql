-- første tabell hentet og redigert fra: https://tangen-2it-utvikling.netlify.app/content/database-01# | 01. 06. 26
CREATE TABLE Produkter (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    Produktnavn VARCHAR(100) NOT NULL,
    Pris DECIMAL(10, 2) NOT NULL,
    Beskrivelse VARCHAR(255),
    Bilde VARCHAR(255)
);

