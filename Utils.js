const main = document.querySelector('#start');

async function cargarContenido(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    throw new Error('No se pudo obtener los datos.');
  }
  return respuesta.text();
}

function reload(El) {
   El.addEventListener("click", ()=> {
      location.reload();
    });

}

function agregarEvento(elemento, url) {
  elemento.addEventListener("click", async (event) => {
    const navbar = await cargarContenido('../views/navbar.html');
    const contenido = await cargarContenido(url);
    main.innerHTML = navbar + contenido;

    const In = document.querySelector('#index');
    const LF = document.querySelector('#LF');
    const AT = document.querySelector('#AT');
    const MT = document.querySelector('#MT');
    const MR = document.querySelector('#MR');
   
   //console.log(MR);
    //reload(In)  
    agregarEvento(LF, '../views/FacialLimpieza.html');
    agregarEvento(AT, '../views/navbar.html');
    agregarEvento(MT, '../views/MasajeTerapeutico.html');
    agregarEvento(MR, '../views/FacialLimpieza.html');
  });
}

window.addEventListener("load", async function(event) {
  const htmlString = await cargarContenido('../views/starts.html');
  main.innerHTML = htmlString;

  const In = document.querySelector('#index');
  const LF = document.querySelector('#LF');
  const AT = document.querySelector('#AT');
  const MT = document.querySelector('#MT');
  const MR = document.querySelector('#MR');
  
  //reload(In)  
  agregarEvento(LF, '../views/FacialLimpieza.html');
  agregarEvento(AT, '../views/navbar.html');
  agregarEvento(MT, '../views/MasajeTerapeutico.html');
  agregarEvento(MR, '../views/FacialLimpieza.html');

});

