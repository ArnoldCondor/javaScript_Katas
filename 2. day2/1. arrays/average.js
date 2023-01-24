let numberTimes;
let numbers = [];
let sum = 0;
let average;

numberTimes = prompt("¿Cuántos números vas a registrar?");

for (let i = 1; i <= numberTimes; i++) {
  numbers.push(prompt(`Ingrese un número (${i} de ${numberTimes})`));
  sum += parseInt(numbers[i - 1]);
}

average = sum / numberTimes;

alert(
  `Ingresaste los números ${numbers.toString()} y el valor promedio es: ${average}`
);
