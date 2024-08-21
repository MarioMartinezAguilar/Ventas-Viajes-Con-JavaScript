//destructuración de datos con javaScript
import{barcelona, roma, paris, londres} from './ciudades.js'

//capturar los datos del DOM: Document Object Module
//ES UNA REPRESENTACION ESTRUCTURADA DE UN DOCUMENTO HTML PERMITE HACER
//UNA MODIFICACION DE ESTRUCTURA, CONTENIDO O ESTILO EN LA PAGINA WEB DE FORMA DINAMICA
//SE ORGANIZA COMO UN ARBOL DE NODOS Y CADA NODO ES UN ELEMENTO ESTE ELEMENTO
//ES UN OBJETO EN JAVASCRIPT QUE TIENE SUS PROPIEDADES Y SUS METODOS
//PARA PODER INTERACTUAR DE FORMA MAS DINAMICA Y ATRACTIVAS

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')


//Agregar un evento click a cada enlace
enlaces.forEach( function(enlace){
    enlace.addEventListener('click', function(){
        //remover el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');

        });
        //Agregar la clase "active" al enlace actual
        this.classList.add('active')

        //traer el contenido correspondiente sgun el enlace
        let contenido = obtenerContenido(this.textContent)
        

        //mostrar el contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio
        


    })

});
//funcion para traer la informacion correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
        
    };
    return contenido[enlace];
}

