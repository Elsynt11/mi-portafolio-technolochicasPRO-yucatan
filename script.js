const nombre = 'Elsy Karina Noh Tuyub';
let rol = 'Desarrolladora Web Jr';

//alert(nombre);
//console.log(nombre);
//document.write(nombre);

let elememtoHTMLTitulo = document.getElementById('titulo');

let elementoDeTypewriter = new Typewriter(elememtoHTMLTitulo, {
    loop: true
});

elementoDeTypewriter.typeString(nombre)
    .pauseFor(2500)
    .deleteAll()
    .typeString(rol)
    .pauseFor(2500)
    .start()