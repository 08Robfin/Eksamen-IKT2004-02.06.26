-- Active: 1780301192033@@127.0.0.1@5432@postgres

-- Begge de 2 første spørringene er hentet fra: https://tangen-2it-utvikling.netlify.app/content/database-01# | 01. 06. 26

CREATE TABLE elev (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    navn VARCHAR(100) NOT NULL,
    alder INTEGER
);

INSERT INTO elev (navn, alder) VALUES ('Ola Tveiten', 19);

-- Spørring for å hente ut elever
SELECT * FROM elev;