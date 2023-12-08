const nombre = "Elsy Karina Noh Tuyub";
let rol = "Desarrolladora Web Jr";

//alert(nombre);
//console.log(nombre);
//document.write(nombre);

let elememtoHTMLTitulo = document.getElementById("titulo");

let elementoDeTypewriter = new Typewriter(elememtoHTMLTitulo, {
  loop: true,
});

elementoDeTypewriter
  .typeString(nombre)
  .pauseFor(2500)
  .deleteAll()
  .typeString(rol)
  .pauseFor(2500)
  .start();

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });
});
