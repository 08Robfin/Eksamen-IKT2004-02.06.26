# Sikkerhet
Det er mange sikkerhets feil i denne kildekoden, det har rett og slett noe å si med at jeg ikke vet nok, og er ikke profesjonell.

Ett av de tydeligste problemene er at databseserveren sitt passord og brukernavn står rett i kildekoden, noe som gjør dne veldig lett å nå og bruke. Dette kan føre til SQL injections. Admin siden er ikke veldig godt seperert fra nettet og kan lett brytes seg inn på. 