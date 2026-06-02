# Sikkerhet
Det er mange sikkerhets feil i denne kildekoden, det har rett og slett noe å si med at jeg ikke vet nok, og er ikke profesjonell.

Ett av de tydeligste problemene er at databseserveren sitt passord og brukernavn står rett i kildekoden, noe som gjør dne veldig lett å nå og bruke. Dette kan føre til SQL injections. Admin siden er ikke veldig godt seperert fra nettet og kan lett brytes seg inn på. 

### fiks
For å fikse mange av disse kan man f. eks sette opp sterkere brannmurer. Det kan også hjelpe å bruke for eksempel en .env fil med variabler så den kan ligge i gitignore så passord og sånn til database ikke blir puttet rett ut på nettet. 