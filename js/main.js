/*ES.1A. Creare un oggetto palla che abbia le seguenti proprietà.
Nome = palla
Peso = 10
*/
//modo 1
const palla = {
  'nome' : 'palla',
  'peso' : 10
};
//modo 2
// var palla = new Object();
// palla.nome = 'palla';
// palla.peso = 10;
/*ES.1B. Attraverso un prompt dare la possibilità all’utente di
modificare il peso della palla.
*/
palla.peso = parseInt(prompt("Inserisci il peso della palla"))
/*ES.2. Creare un array di oggetti: ogni oggetto descriverà una bici
da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.*/
//creo un array di oggetti con relative proprietà
const bici = [
  {
    'nome' : 'spider',
    'peso' : 15
  },
  {
    'nome' : 'elettrica',
    'peso' : 25
  },
  {
    'nome' : 'mountain',
    'peso' : 40
  },
  {
    'nome' : 'corsa',
    'peso' : 10
  }
];
//creo una var per la bici che avrà il peso minore scegliendo che corrisponda al primo oggetto nell'array
let bicileggera = bici[0];
//faccio un ciclo sgli oggetti nell'array
for(let i = 0; i < bici.length; i++){
  //se il peso della bici ciclata è minore rispetto al peso di bicileggera allora la bicileggera sarà quella bici
  if(bici[i].peso < bicileggera.peso){
    bicileggera = bici[i];
  }
}
console.log(bicileggera)
/*ES.3. Creare un oggetto che rappresenti un triangolo rettangolo,
con le seguenti proprietà: base e altezza.
Calcolare perimetro e area.*/
//creo l'oggetto triangolo con le due proprietà che conosco
const triangolo = {
  'base' : 15,
  'altezza' : 20
}
//inserisco le altre proprietà tramite il calcolo
triangolo.area = triangolo.base * triangolo.altezza / 2;
triangolo.ipotenusa = (triangolo.base **2 + triangolo.altezza **2) ** 0.5;
triangolo.perimetro = triangolo.base + triangolo.altezza + triangolo.ipotenusa;
console.log(triangolo)
/*ES.4A. Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà:
nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre
saranno tutte settate a 0.
4B
Generare numeri random al posto degli 0 nelle proprietà:
punti fatti e falli subiti*/
//creo array di oggetti in cui definisco il valore solo della chiave 'nome'. Creo poi una funzione per generare i numeri random e la inserisco come valore nele chiavi 'punti' e 'falli'.
const Random = () => Math.floor(Math.random() * 6 - 1) + 1;
const squadre = [
  {
    'nome' : 'Inter',
    'punti' : Random(),
    'falli' : Random()
  },
  {
    'nome' : 'Milan',
    'punti' : Random(),
    'falli' : Random()
  },
  {
    'nome' : 'Roma',
    'punti' : Random(),
    'falli' : Random()
  }
];
