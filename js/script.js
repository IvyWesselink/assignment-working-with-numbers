const array = [];

for (i = 0; i < 249; i++) {
  array[i] = Math.floor(Math.random() * (300 - 10)) + 10;
}
for (i = 250; i < 500; i++) {
  array[i] = Math.floor(Math.random() * (700 - 500)) + 500;
}

let grootsteGetal = 0;
let indexGrootsteGetal = 0;
let laagsteGetal = array[0];

for (i = 0; i < array.length; i++) {
  if (array[i] > grootsteGetal) {
    grootsteGetal = array[i];
    indexGrootsteGetal = i;
  }
  if (array[i] < laagsteGetal) {
    laagsteGetal = array[i];
  }
}


let p = document.createElement("p");
p.textContent = `Uit het array van ${array.length} getallen is het getal ${grootsteGetal} het grootst. Dit getal zit in ${indexGrootsteGetal} index in het array.`;

document.body.appendChild(p);