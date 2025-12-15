let puntos = 0;

let nombre = prompt("Ingresá tu nombre");
let edad = parseInt(prompt("Ingresá tu edad"));
while (true) {
  if (!isNaN(edad)) {
    break;
  } else {
    alert("⚠️ Tenés que ingresar un número válido.");
    edad = parseInt(prompt("Ingresá tu edad"));
  }
}

if (edad < 18) {
  alert(`${nombre} es menor de edad`);
} else {
  alert(`${nombre} es mayor de edad`);
}

let juegosFavoritos = [];
let juego = prompt("Ingresa un juego favorito (o ESC para terminar)");

while (juego !== "ESC") {
  juegosFavoritos.push(juego);
  puntos++;
  let seguir = confirm("¿Querés agregar otro juego?");
  if (!seguir) break;
  juego = prompt("Ingresá otro juego favorito (o ESC para terminar)");
}

function saludar(usuario) {
  console.log(`Hola ${usuario}, estos son tus juego favoritos:`);
}
saludar(nombre);

for (let i = 0; i < juegosFavoritos.length; i++) {
  console.log(`Juego ${i + 1}: ${juegosFavoritos[i]}`);
}

alert(
  `¡${nombre}, ingresaste ${juegosFavoritos.length} juegos y sumaste ${puntos} puntos!`
);
