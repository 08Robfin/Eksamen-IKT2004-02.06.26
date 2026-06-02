# Arkitektur

## Database diagram
!image[Bilde av tabell](./bilder/ProdukterTabell.png)

## Database
Databasen er satt opp som en docker container, denne containeren fungerer fint fordi den kan lettes sendes rundt og vil virke på alle maskiner. Det er en Postgres container på port 5432.

## NPM pakker
Det er brukt pakkene express, pg, og ejs. Express brukes til å lage rutene og å gåndtere url-ene. pg brukes så node kan kobles opp til postgres og ejs brukes så dte kan puttes informasjon fra databasen inn i nettsiden. *Hvilke pakker som skal lastes ned har blitt bestemt med hjelp av KI*

Det er blitt lagt til en gitignore fil så npm ikke følger med til github, dette kan lastes ned igjen med ```npm install express pg ejs```

