import { obtenerReloj } from "./Práctica6.js";
import { factorial } from "./Práctica7.js";
import { miCuadrado,miPentagono,miTriangulo } from "./práctica5.js";

console.log(obtenerReloj());
console.log(factorial());

console.log(`El área del triangulo es: ${miTriangulo.area()} y su perímetro es: ${miTriangulo.perimetro()}`);
console.log(`El área del cuadrado es: ${miCuadrado.area()} y su perímetro es: ${miCuadrado.perimetro()}`);
console.log(`El área del pentágono es: ${miPentagono.area()} y su perímetro es: ${miPentagono.perimetro()}`);