'use strict';

const mesta = ['praha', 'brno', 'české budějovice'];

/*
forEach() vykoná předanou funkci pro každý prvek v poli
*/
mesta.forEach((mesto) => {
  console.log(mesto);
});

const cisla = ['10', '3', '15', '43', '9', '22', '31', '2'];

cisla.forEach((cislo) => {
  console.log(cislo);
});

cisla.forEach((cislo) => {
  console.log(Number(cislo));
});

const naCisla = [];
cisla.forEach((cislo) => {
  naCisla.push(Number(cislo));
});

console.log(naCisla); // [10, 3, 15, 43, 9, 22, 31, 2]

/*
map() vytvoří nové pole naplněné výsledky volání předané funkce nad každým prvkem pole
tzn. předaná funkce musí pomocí return vracet výsledek
*/
const naCisla2 = cisla.map((cislo) => {
  return Number(cislo);
});
console.log(naCisla2); // [10, 3, 15, 43, 9, 22, 31, 2]

const uzivatele = [
  { jmeno: 'Standa', prijmeni: 'Kosáček' },
  { jmeno: 'Zdeněk', prijmeni: 'Beňa' },
  { jmeno: 'Eva', prijmeni: 'Barnišinová' },
  { jmeno: 'Miroslav', prijmeni: 'Němec' },
  { jmeno: 'Radka', prijmeni: 'Pekárková' },
];

const jmenaUzivaletu = uzivatele.map((uzivatel) => {
  return uzivatel.jmeno;
});

console.log(jmenaUzivaletu); // ["Standa", "Zdeněk", "Eva", "Miroslav", "Radka"]

const celaJmenaUzivaletu = uzivatele.map((uzivatel) => {
  return uzivatel.jmeno + ' ' + uzivatel.prijmeni;
});

console.log(celaJmenaUzivaletu); // ["Standa Kosáček", "Zdeněk Beňa", "Eva Barnišinová", "Miroslav Němec", "Radka Pekárková"]

/*
filter() vytvoří nové pole s všemi elementy, které splní podmínku v předané funkci
předaná funkce vrací true nebo false, na základě toho buď bude nebo nebude daný prvek zařazen v novém poli
*/
const cislaVetsiNez20 = cisla.filter((cislo) => {
  return Number(cislo) > 20;
});

console.log(cislaVetsiNez20); // ["43", "22", "31"]

/*
every() vrací true pokud všechny prvky pole splňují podmínku v předané funkci, v opačném případě vrací false
*/
const jsouVsechnaCislaVetsiNez30 = cisla.every((cislo) => {
  return Number(cislo) > 30;
});
console.log(jsouVsechnaCislaVetsiNez30); // false

const jeAlesponJednoCisloVetsiNez30 = cisla.some((cislo) => {
  return Number(cislo) > 30;
});
console.log(jeAlesponJednoCisloVetsiNez30); // true

/*
Bonus

sort() vrací seřazené pole
funkce sort() postupně porovnává prvky mezi sebou,
předaná funkce přijímá dva parametry pro první a druhý porovnávaný prvek.
Pokud je první prvek větší než druhý,
tak předaná funkce vrací kladnou hodnotu (např. 1),
pokud je první prvek menší tak vrací zápornou hodnotu (např. -1).
Pokud jsou prvky stejné, tak vrací 0;
*/
const cisla2 = [10, 3, 15, 43, 9, 22, 31, 2];
const serazenaCisla = cisla2.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  }

  return 0;
});

console.log(serazenaCisla); // [2, 3, 9, 10, 15, 22, 31, 43]

/*
Extra bonus

reduce() výsledkem funkce retuce je jedna výstupní hodnota.
Předaná funkce přijímá „accumulator“ a aktuální prvek pole. Postupně prochází celé pole a k proměnné accumulatoru přidává svůj výstup, po projetí všech prvků se stane accumulator výsledkem funkce.
*/
const soucetCisel = cisla2.reduce((accumulator, cislo) => {
  return accumulator + cislo;
});

console.log(soucetCisel); // 135
