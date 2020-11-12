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
// palla.peso = parseInt(prompt("Inserisci il peso della palla"))
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
// let {nome} = bicileggera;
//uso il template literal per inserire il testo e il valore della chiave nome dell'oggetto bicileggera
let {nome} = bicileggera;
console.log(`La bici più leggera è : ${nome}`)

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
const random = () => Math.floor(Math.random() * 6 - 1) + 1;
const squadre = [
  {
    'nome' : 'Inter',
    'punti' : random(),
    'falli' : random()
  },
  {
    'nome' : 'Milan',
    'punti' : random(),
    'falli' : random()
  },
  {
    'nome' : 'Roma',
    'punti' : random(),
    'falli' : random()
  }
];

/*ES.5. Partendo da un array semplice tipo:
var myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
chiediamo all’utente con 2 prompt due numeri tra 0 e la lunghezza dell’array
quindi creiamone uno nuovo con solo i valori che hanno la posizione compresa tra i due numeri inseriti dall’utente*/
//creo la costante lista
const lista = ['Marco', 'Chiara', 'Simone', 'Alessia', 'Mirko', 'Gaia'];
//creo la costante che conterrà gli input dell'utente
const inputList = [];
//con il while dico di generare i prompt finchè non avrò due elementi dentro all'array
while(inputList.length < 2){
  let input = parseInt(prompt("Inserisci un numero tra 0 e 4"));
  //creo le condizioni per accettare gli input nell'array
  if(input < 0 || input > lista.length || isNaN(input)){
    alert("Hai sbaglaito qualcosa, riprova!")
  }
  //aggiungo gli elementi selezionati dentro all'array
  else{
    inputList.push(input);
  }
}
//metto in ordine i numeri dentro all'array
inputList.sort();
//creo la costante che conterrà gli elementi filtrati nel miio array. cin Filter prendo gli elementi che hanno nell'indice sono tra i valori inseriti nei prompt
const filteredLista = lista.filter((element, index) => {
  return index > inputList[0] && index < inputList[1];
});
//stampo la lista filtrata
console.log(filteredLista);

/*dato questo array di obj iniziale:
var arrayObj = [
{name: 'Poppy', type: 'tshirt', color: 'red'},
{name: 'Jumping', type: 'occhiali', color: 'blue'},
{name: 'CrissCross', type: 'scarpe', color: 'black'},
{name: 'Jenny', type: 'borsa', color: 'pink'},
];
Creiamo una copia dell’array di partenza e aggiungiamo ai singoli elementi (quindi ogni oggetto del nuovo array)
una nuova proprietà position che contiene una lettera casuale. non dobbiamo modificare l’array iniziale*/
const arrayObj = [
  {name: 'Poppy', type: 'tshirt', color: 'red'},
  {name: 'Jumping', type: 'occhiali', color: 'blue'},
  {name: 'CrissCross', type: 'scarpe', color: 'black'},
  {name: 'Jenny', type: 'borsa', color: 'pink'},
];
//creo l'array copia
const cloneObj = [];
//creo una funzione che generi le lettere random
function randomLetter(){
  const alphabet = 'abcdefghilmnopqrstuvz';
  return alphabet[Math.floor(Math.random() * alphabet.length)]
}
//ciclo su ogni elemento del primo array e aggiungo al nuovo array gli elementi del primo più la coppia chiave-valore position/lettera random
arrayObj.forEach((element) => {
  cloneObj.push({...element, position: randomLetter()})
})
console.log(cloneObj);
