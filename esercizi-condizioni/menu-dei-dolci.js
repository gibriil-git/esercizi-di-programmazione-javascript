/*
  Menu dei dolci
  Scrivi un programma che dato il seguente menu (da stampare):
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia

  Prenda in input un valore numerico che rappresenti la scelta e restituisca:
    - se la scelta non è tra quelle elencate la scritta 'Dolce non disponibile',
    - altrimenti la scelta effettuata 'Hai scelto il dolce X'.


  Esempi:
    Input: scelta = 4
    Output: Hai scelto il dolce Macedonia

    Input: scelta = 7
    Output: Dolce non disponibile

  http://www.imparareaprogrammare.it
*/


const menu = [0, 1, 2, 3, 4];
console.log(menu);

var choice = menu [1];

if (choice == 1){
    console.log('Hai scelto il tiramisù');
}else if (choice == 2){
    console.log('Hai scelto la torta della nonna' );
}else if (choice == 3){
    console.log('Hai scelto la cheesecake alla nutella');
}else if (choice == 4){
    console.log('Hai scelto la macedonia');
}else {
    console.log('Dolce non disponibile');
  }

/*const menu = '1';
switch (menu) {
  case 'tiramisù':
    console.log('Hai scelto il tiramisù');
    break;
  case 'tortadellanonna':
    console.log('Hai scelto la torta della nonna');
    break;
  case 'cheesecakenutella':
    console.log('Hai scelto la cheesecakenutella');
    break;
  case 'macedonia':
    console.log('Hai scelto la macedonia');
    break;
  default:
    console.log(`Sorry, we are out of this cake`);
  }*/