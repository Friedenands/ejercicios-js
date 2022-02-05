// Ejercicio 1
console.log("Ejercicio 1: Números primos");

const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];


ejercicio1.forEach(num => { 
  
    let c0 = 0;
    let c1 = 0;

  for (let i = 1; i < num; i++) {
    
        if(num % (i) == 0) {
      c1 = c1 + 1;
    } else {
      c0 = c0 + 1;
    }
    }
  
    if (c1 == 1) { 
      console.log("El número " + num + " es un número primo."); 
    } 
})

console.log("Gracias por participar.");

console.log(" ")


// Ejercicio 2: Fiesta de Ramón

console.log("Ejercicio 2: Fiesta de Ramón");

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

let invitados = []

ejercicio2.forEach(persona => {
  if (persona.edad > 17 && persona.esFamiliar) {
    invitados.push(persona.nombre) 
  }
})

console.log("Los personas que pueden pasar a la fiesta son: " + invitados);

console.log(" ")

// Ejercicio 3: Serie Fibonacci

console.log("Ejercicio 3: Serie Fibonacci");

let fibonacci = [0, 1]
suma = 0;

for (let i = 0; i < 48; i++) {
  suma = fibonacci[i] + fibonacci[i+1];
  fibonacci.push(suma);
}

contador = 1;
for (let i = 0; i < 50; i++) {
  console.log("La posición "+ contador + " de la serie de Fibonacci es el número " + fibonacci[i]);
  contador = contador + 1;
}