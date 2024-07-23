
const productos = [
    {
      nombre: "Aceite",
      precio: 2000,
    },
    {
      nombre: "Galletas Dulces",
      precio: 1000,
    },
    {
      nombre: "Azucar",
      precio: 800,
    },
    {
      nombre: "Leche",
      precio: 1500,
    },
    {
      nombre: "Cafe",
      precio: 3500,
    },
  ],
  carrito = [];

let seleccion = prompt("Hola queres comprar algún producto? si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("Por favor ingresa si o no");
  seleccion = prompt("Hola queres comprar algún producto? si o no");
}

if (seleccion == "si") {
  alert("Esta es nuestra lista de productos");
  let todosLosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todosLosProductos.join(" - "));
} else if (seleccion == "no") {
  alert("Gracias por visitar nuestra tienda! Gracias!");
}


while (seleccion != "no") {
  let producto = prompt("elegi un producto para tu carrito!");
  let precio = 0;

  if (
    producto == "Aceite" ||
    producto == "Galletas Dulces" ||
    producto == "Azucar" ||
    producto == "Leche" ||
    producto == "Cafe"

  ) {
    
      switch (producto) {
        case "Aceite":
          precio = 2000;
          break;
        case "Galletas Dulces":
          precio = 1000;
          break;
        case "Azucar":
          precio = 800;
          break;
        case "Leche":
          precio = 1500;
          break;
        case "Cafe":
          precio = 3500;
          break;
        default:
          break;
      }
    let unidades = parseInt(
      prompt("Cuantas unidades de ese producto queres llevar")
    );

    carrito.push({ producto, unidades, precio });
    console.log(carrito);

  } else {
    alert("No tenemos ese producto");
  }

  seleccion = prompt("Queres seguir comprando si o no");

    while (seleccion == "no") {
    alert("Gracias por la compra, buen dia");

    carrito.forEach((carritoFinal) => {
      console.log(
        `"producto:" ${carritoFinal.producto}, "unidades:" ${
          carritoFinal.unidades
        }, "Total a pagar por producto:" ${carritoFinal.unidades * carritoFinal.precio}`
      );
    });
    break;
  }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`El total a pagar por su compra es de:  ${total}`)

