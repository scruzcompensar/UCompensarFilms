// Datos para las tarjetas de peliculas
const datosTarjetas = [
    { id: 1, nombre: "Thor 2 - The Dark World", contenido: "Malekith, un enemigo más antiguo que el universo, regresa a la Tierra para cumplir su plan destructor.", tiempo: "112 mins", imagen: "/Imagenes/Thor2.jpg" ,fecha: "08/11/2013"},
    { id: 2, nombre: "Iron Man 3", contenido: "El brillante Tony Stark, tras ver destruido todo su universo personal, debe encontrar y enfrentarse a un enemigo cuyo poder no conoce límites.", tiempo: "131 mins", imagen: "/Imagenes/Iron3.webp", fecha: "03/05/2013" },
    { id: 3, nombre: "Thor", contenido: "Thor es desterrado a la Tierra por su padre para que viva entre los hombres y descubra así el verdadero sentido de la humildad.", tiempo: "115 mins", imagen: "/Imagenes/Thor1.webp",fecha: "06/05/2011"},
    { id: 4, nombre: "Avengers - Infinity War", contenido: "Los superhéroes se alían para vencer al poderoso Thanos, el peor enemigo al que se han enfrentado.", tiempo: "149 mins", imagen: "/Imagenes/Avengers3.webp", fecha: "04/05/2012"},
    { id: 5, nombre: "Thor - Ragnarok", contenido: "Thor está preso en el otro extremo del universo. Necesita regresar a tiempo para evitar que la todopoderosa Hela destruya su mundo.", tiempo: "130 mins", imagen: "/Imagenes/Thor3.webp",fecha: "03/11/2017" },
    { id: 6, nombre: "Avengers", contenido: "El director de la Agencia SHIELD decide reclutar a un equipo para salvar al mundo de un desastre casi seguro.", tiempo: "143 mins", imagen: "/Imagenes/Avengers.png",fecha: "04/05/2012" },
    { id: 7, nombre: "Avengers - Era de Ultrón", contenido: "Los Vengadores se reúnen de nuevo y juntan sus fuerzas con las de los recién llegados Quicksilver y Bruja Escarlata.", tiempo: "141 mins", imagen: "/Imagenes/Avengers2.webp" ,fecha: "01/05/2015"},
    { id: 8, nombre: "Iron Man", contenido: "Un empresario millonario construye un traje blindado y lo usa para combatir el crimen y el terrorismo.", tiempo: "126 mins", imagen: "/Imagenes/Iron1.jpg" ,fecha: "02/05/2008"},
    { id: 9, nombre: "Avengers - End Game", contenido: "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos.", tiempo: "181 mins", imagen: "/Imagenes/Avengers4.png" ,fecha: "26/05/2019"},
    { id: 10, nombre: "Iron Man 2", contenido: "Con el mundo consciente de que él es Iron Man, el millonario Tony Stark debe confrontar a un enemigo nuevo y poderoso.", tiempo: "124 mins", imagen: "/Imagenes/Iron2.jpg" ,fecha: "07/05/2010"},
];

// Función para mostrar las tarjetas
function mostrarTarjetas(tarjetas) {
    const contenedorTarjetas = document.getElementById("contenedor-tarjetas");
    contenedorTarjetas.innerHTML = ""; // Limpiar contenido previo
    //Recorre el array de las tarjetas para crearlas
    tarjetas.forEach(tarjeta => {
        const tarjetaHTML = 
            `<div class="col-auto">
                <div class="card shadow-sm">
                    <svg class="bd-placeholder-img card-img-top" width="100%" height="300" role="img" focusable="false" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <image href="${tarjeta.imagen}" width="100%" height="100%"   />
                    </svg>
                    <div class="card-body">
                        <h5 class="card-title">${tarjeta.nombre}</h5>
                        <p class="card-text">${tarjeta.contenido} </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-primary" onclick="mostrarInformacion('${tarjeta.id}')">Info +</button>
                            </div>
                            <small class="text-muted">Duración: ${tarjeta.tiempo}</small>
                            <small class="text-muted">Estreno: ${tarjeta.fecha}</small>
                        </div>
                    </div>
                </div>
            </div>`;
        //Agrega las tarjetas al cuerpo de la pagina
        contenedorTarjetas.innerHTML += tarjetaHTML;
    });
}

// Función para filtrar las tarjetas
function filtrarTarjetas() {
    const filtro = document.getElementById("buscador").value.toLowerCase();
    const idFiltros = document.getElementById("Filtros");
    //Valida si muestra el grupo de botones de filtros
    if (filtro === "") {
        idFiltros.style.display = "block";
        ordenarTarjetasAleatorio();
    } else{
        idFiltros.style.display = "none";
    }
    //Realiza la filtración de peliculas de acuerdo con el filtro
    const tarjetasFiltradas = datosTarjetas.filter(tarjeta =>
        tarjeta.nombre.toLowerCase().includes(filtro)
    );
    mostrarTarjetas(tarjetasFiltradas);
}

//Función para activar estilo para el boton de aleatorio
function ordenarTarjetasAleatorio() {
    const btn_nombre = document.getElementById("nombre");
    if (btn_nombre.classList.contains('btn-info')) {
        btn_nombre.classList.remove('btn-info');
        btn_nombre.classList.add('btn-transparent');
    }
    btn_aleatorio = document.getElementById("aleatorio");
    if (btn_aleatorio.classList.contains('btn-transparent')) {
        btn_aleatorio.classList.remove('btn-transparent');
        btn_aleatorio.classList.add('btn-info');
    }
    btn_fecha = document.getElementById("fecha");
    if (btn_fecha.classList.contains('btn-info')) {
        btn_fecha.classList.remove('btn-info');
        btn_fecha.classList.add('btn-transparent');
    }
    mostrarTarjetas(datosTarjetas);
}

//Función para activar estilo para el boton de Nombre
function ordenarTarjetasNombre() {
    const btn_aleatorio = document.getElementById("aleatorio");
    if (btn_aleatorio.classList.contains('btn-info')) {
        btn_aleatorio.classList.remove('btn-info');
        btn_aleatorio.classList.add('btn-transparent');
    }
    btn_nombre = document.getElementById("nombre");
    if (btn_nombre.classList.contains('btn-transparent')) {
        btn_nombre.classList.remove('btn-transparent');
        btn_nombre.classList.add('btn-info');
    }
    btn_fecha = document.getElementById("fecha");
    if (btn_fecha.classList.contains('btn-info')) {
        btn_fecha.classList.remove('btn-info');
        btn_fecha.classList.add('btn-transparent');
    }
    //Realiza la filtración por nombre
    const tarjetasOrdenadasPorNombre = datosTarjetas.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarTarjetas(tarjetasOrdenadasPorNombre);
}

//Función para activar estilo para el boton de Fecha
function ordenarTarjetasFecha() {
    const btn_aleatorio = document.getElementById("aleatorio");
    if (btn_aleatorio.classList.contains('btn-info')) {
        btn_aleatorio.classList.remove('btn-info');
        btn_aleatorio.classList.add('btn-transparent');
    }
    btn_fecha = document.getElementById("fecha");
    if (btn_fecha.classList.contains('btn-transparent')) {
        btn_fecha.classList.remove('btn-transparent');
        btn_fecha.classList.add('btn-info');
    }
    btn_nombre = document.getElementById("nombre");
    if (btn_nombre.classList.contains('btn-info')) {
        btn_nombre.classList.remove('btn-info');
        btn_nombre.classList.add('btn-transparent');
    }
    //Realiza la filtración por fecha
    const tarjetasOrdenadasPorFecha = datosTarjetas.slice().sort((a, b) => {
        const fechaA = new Date(a.fecha);
        const fechaB = new Date(b.fecha);
        return fechaA - fechaB;
    });
    mostrarTarjetas(tarjetasOrdenadasPorFecha);
}

//Función para redireccionar a pagina de detalle con el id de la pelicula
function mostrarInformacion(idTarjeta){
    window.location.href = "DetalleFilm.html?id=" + idTarjeta;
}

// Evento de entrada en el campo de búsqueda
document.getElementById("buscador").addEventListener("input", filtrarTarjetas);

mostrarTarjetas(datosTarjetas);
// Mostrar todas las tarjetas al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    mostrarTarjetas(datosTarjetas);
});

//Evento para redireccionar a pagina principal al dar clik en icono
document.getElementById("logo_img").addEventListener("click", function() {
    window.location.href = "/HTML/Index.html";
});

//Evento de acción para filtro de aleatorio
document.getElementById("aleatorio").addEventListener("click", function() {
    ordenarTarjetasAleatorio();
});

//Evento de acción para filtro de nombre
document.getElementById("nombre").addEventListener("click", function() {
    ordenarTarjetasNombre();
});

//Evento de acción para filtro de Fecha
document.getElementById("fecha").addEventListener("click", function() {
    ordenarTarjetasFecha();
});