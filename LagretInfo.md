# Run Postgres
## Hentet fra: https://tangen-2it-utvikling.netlify.app/content/database-01#/4 | 01. 06. 2026
docker run --rm  -p5432:5432  -e POSTGRES_PASSWORD=mysecretpassword  postgres

# Postgres tilkobling
## Hentet fra: https://tangen-2it-utvikling.netlify.app/content/database-01#/8 | 01. 06. 2026
server: localhost
brukernavn: postgres
port: 5432
passord: mysecretpassword
database: postgres

# Mal for å lage tabell
## Hentet fra: https://tangen-2it-utvikling.netlify.app/content/database-01#/19 | 01. 06. 2026
CREATE TABLE elev (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    navn VARCHAR(100) NOT NULL,
    alder INTEGER
);

# Mal for å legge til i tabell
## https://tangen-2it-utvikling.netlify.app/content/database-01#/20 | 01. 06. 2026
INSERT INTO elev (navn, alder) VALUES ('Ola Tveiten', 19);

# Handelnettsider for utstyr
## Komplett
https://www.komplettbedrift.no/

## Dustin
https://www.dustin.no/

## Atea eShop
https://www.atea.no/eshop/
