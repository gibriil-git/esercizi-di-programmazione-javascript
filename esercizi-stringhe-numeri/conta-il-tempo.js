/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
var time = 56478;
var minute = 60;
var hour = 3600;


var hours = Math.floor (time / hour);
var minutes = Math.floor (time / minute) - (hours * minute);
var seconds = time - ((minutes * minute) + (hours * hour));


console.log(hours, minutes, seconds);

/* var time = 33456;
var minuto = 60;
var ore = 3600;


var oreTotali = Math.floor (time / ore);
var minutiTotali = Math.floor ((time % ore) / minuto);
var secondiTotali = (time % minuto);

console.log(oreTotali, minutiTotali, secondiTotali); */
