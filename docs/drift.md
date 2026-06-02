# Drift
Dette er en fil for hvordan IT skal kunne deploy nettsiden og faktisk administrere den. 

### opsett
For å sette opp nettsiden må npm installeres med de riktige packages, disse finner du i arkitektur.md. Deretter må det startes en postgres docker container og passord og brukernavn og andre detaljer må endres i db.js.

For å kjøre web serveren må du peke node på server.js, da skriver du i en terinal som er åpen i "src" mappen ```Node server.js```

### Kontinuerlig driftig
Videre for at den skal kjøre skal det ikek være noe mer som trenger å gjøres, men jeg kan anbefale å bytte vekk fra node til NginX som kjører på en server. Denne serveren bør eskluderes med DMZ til en egen del av nettverket så ikke folk akn hacke seg videre inn.