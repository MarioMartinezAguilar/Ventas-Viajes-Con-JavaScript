# TITULO DEL PROYECTO    

**App Web De Venta De Viajes**

# DESCRIPCIÓN DEL PROYECTO
**En esta aplicación web trata de hacer una página web de venta de viajes, lo cual es hacer un menú de navegación(SideBar), con los diferentes tipos de ciudades con los que se cuenta(Barcelona,Roma,Paris y Londres).Cundo el usuario haga clic en cada uno de los apartados del menú se tendrá que desplegar toda la información de esa ciudad como lo son:(nombre de la ciudad, una descripción y el costo del boleto de dicho viaje), para finalizar en el último apartado del menú se mostrara la opción Ver Ciudades Europeas donde al hacer clic se mostrara al usuario un carrusel en 3D lleno de imágenes donde podrá ver imágenes reales de los lugares más importantes con las que se cuenta en las ciudades que desee visitar**

# DESCRIPCION DETALLADA DEL PROYECTO (Archivos Del Repositorio)

## Estructura Web (Navegación Web)
**Bueno lo que es el archivo index.html principal podemos observar como está estructurado el etiquetado para hacer el menú (SideBar) y el contenedor que atreves de los id vamos a poder insertar las características de la ciudad dependiendo a cual ciudad le dé clic el usuario mediante JavaScript**

## Diseño Web CSS (Estilizado De La Página)
**Archivo styles.css, encontraremos todo lo relacionado al estilo que le dimos a la página como fondos colores, márgenes, diseño de botones posiciones, anchos, altos, además código de animación para darle estilo a nuestro carrusel en 3D entre otras propiedades para poderlo crear, entre otras cosas relacionadas al lenguaje de estilizado CSS, para ver más detalladamente consultar el archivo de styles.css de nuestro repositorio**

## Funcionamiento JavaScript (Archivo ciudades.js)
**En este archivo podemos ver como creamos los objetos en JavaScript que fueron las ciudades Barcelona, roma, parís y Londres cada uno con sus atributos, además aprendimos que también podemos exportar los objetos atreves de la propiedad export para utilizarlos en el archivo script.js**

## Funcionamiento Y Dinamismo Con JavaScript (Archivo script.js)

**En esta parte aprendimos hacer la desestructuración de datos de JavaScript mediante la propiedad import, ahora lo que hicimos es tratar de manipular el DOM en página web para poder hacerla de manera más dinámica para ello empleamos lo que fue una propiedad de JavaScript llamada document.querySelectorAll lo que permite poder hacer la consulta de todos los selectores de la página en este caso queremos la etiqueta a para poder manipular la navegación, luego la propiedad document.getElementById para poder obtener el id de las etiquetas de nuestro archivo html, después hacemos un ciclo para poderle asignar un evento clic a cada enlace con la propiedad addEventListener. Ahora agregamos una clase mediante JavaScript en este caso la clase active mediante la propiedad classList.add como podemos ver en la función del archivo, después hicimos una función para obtener el contenido y traer la información correcta desde ciudades.js como podemos ver en la función llamada function obtenerContenido(enlace), por ultimo traemos el contenido correspondiente según el enlace, y además mostramos el contenido en el DOM con la propiedad innerHTML, para ver más detalles de esto consultar el archivo scripts.js de nuestro repositorio, cabe mencionar que el script tiene que ser de tipo(module)para poder hacer uso de la exportación de objetos**

## Estructura Web (Carrusel)

**En el archivo carrousel.html, aquí nada mas agregamos las imágenes necesarias para elaborar el carrusel y un encabezado y por ultimo un botón para poder regresar al index.html**

### Lista De Tecnologías Y Herramientas Usadas En Nuestro Proyecto  

1. HTML
2. CSS 
3. JavaScript    
3. GitHub
4. Herramienta de Visual Studio Code(live Server)

*Elaborado Por: Mario Martínez Aguilar*



