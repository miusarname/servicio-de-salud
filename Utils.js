const main = document.querySelector("#start");
const NotF = document.querySelector("#not");

async function cargarContenido(url) {
  const respuesta = await fetch(url);
  if (!respuesta.ok) {
    throw new Error("No se pudo obtener los datos.");
  }
  return respuesta.text();
}


const cargarstart = async () => {
  
  const htmlString = await cargarContenido("../views/starts.html");
  main.innerHTML = htmlString;

  const In = document.querySelector("#index");
  const LF = document.querySelector("#LF");
  const AT = document.querySelector("#AT");
  const MT = document.querySelector("#MT");
  const MR = document.querySelector("#MR");
  const SM = document.querySelector("#SM");

  In.addEventListener("click", (e) => {
    cargarstart();
  })
  agregarEvento(LF, "../views/FacialLimpieza.html");
  agregarEvento(AT, "../views/autohemoterapia.html");
  agregarEvento(MT, "../views/MasajeTerapeutico.html");
  agregarEvento(MR, "../views/Error.html");
  agregarEvento(SM, "../views/Error.html");
}

function agregarEvento(elemento, url) {
  elemento.addEventListener("click", async (event) => {
    const navbar = await cargarContenido("../views/navbar.html");
    const contenido = await cargarContenido(url);
      main.innerHTML = navbar + contenido;

    const In = document.querySelector("#index");
    const LF = document.querySelector("#LF");
    const AT = document.querySelector("#AT");
    const MT = document.querySelector("#MT");
    const MR = document.querySelector("#MR");
    const SM = document.querySelector("#SM");

    In.addEventListener("click", (e) => {
      cargarstart();
    })
    agregarEvento(LF, "../views/FacialLimpieza.html");
    agregarEvento(AT, "../views/autohemoterapia.html");
    agregarEvento(MT, "../views/MasajeTerapeutico.html");
    agregarEvento(MR, "../views/Error.html");
    agregarEvento(SM, "../views/Error.html");
  });
}

window.addEventListener("load", async function (event) {
  const htmlString = await cargarContenido("../views/starts.html");
  main.innerHTML = htmlString;

  const In = document.querySelector("#index");
  const LF = document.querySelector("#LF");
  const AT = document.querySelector("#AT");
  const MT = document.querySelector("#MT");
  const MR = document.querySelector("#MR");
  const SM = document.querySelector("#SM");

  In.addEventListener("click", (e) => {
    cargarstart();
  })
  agregarEvento(LF, "../views/FacialLimpieza.html");
  agregarEvento(AT, "../views/autohemoterapia.html");
  agregarEvento(MT, "../views/MasajeTerapeutico.html");
  agregarEvento(MR, "../views/Error.html");
  agregarEvento(SM, "../views/Error.html");
});


