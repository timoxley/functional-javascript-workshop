"use strict";

var path = require("path");

var repeat = require(path.resolve(process.cwd(), process.argv[2]));

var count = 0;
var CYCLES = 10000;

function operation() {
  for (var i = 0; i < 1000000; i++) {
    // quema algunos ciclos de la CPU
  }
  // cuenta cuantas veces ha sido llamada esta función
  count++;
}

console.error();
console.error(operation.toString());
console.error();
console.error(
  "Tratando de ejecutor las operaciones de arriba %d veces, puede que se congele...",
  CYCLES
);
console.error();
console.error("Presiona Ctrl+C para terminar el proceso.");
console.error();

var start = Date.now();
repeat(operation, CYCLES);

setTimeout(function() {
  var end = Date.now();
  console.error("Se ejecutarón %d operaciones.", count);

  if (count < 10) {
    console.log("¡Error! Debiste haber completado algunas operaciones");
    process.exit(1);
  }

  if (count >= CYCLES) {
    console.log("¡Error! No debiste haber completado todas las operaciones");
    process.exit(1);
  }

  console.log("¡Las operaciones se interrumpieron exitosamente!");
  console.error("Interrumpido luego de %d milisegundos.", end - start);
  process.exit();
}, 100);
