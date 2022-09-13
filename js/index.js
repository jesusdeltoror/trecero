//En el import, importamos las clases del archivo clases.js para ser usadas aquí.
import { GeneradorDeCuentos, EditorDeCuentos } from "./clases.js"; 


//Instanciamos las clases importadas en un objeto.
let generador = new GeneradorDeCuentos()
let editor = new EditorDeCuentos()

// Usamos el método generarCuento para poder agregar un cuento nuevo a la lista/diccionario que ya teníamos.
generador.generarCuento("leon","lobo","Vagaba cierto día lobo por lugares solitarios a la hora en que el sol se ponía en el horizonte, y, viendo su sombra bellamente alargada, exclamó: <br> -“¿Cómo me va a asustar el leon con semejante talla que tengo? ¡Con treinta metros de largo, bien fácil me será convertirme en rey de los animales!”. <br> Y mientras soñaba con su orgullo, El poderoso leon le cayó encima y empezó a devorarlo. Entonces lobo, cambiando de opinión se dijo: <br> -“La presunción es causa de mi desgracia”." 
);

//Asignamos a variables a las ID's de los elementos HTML para que puedan ser mostradas y usadas.
//Las variables se crean para:
//-Hacer que el botón ejecute la función asignada al evento de la variable...
//-Mostrar el texto modificado del cuento final en el div del HTML...
//-Tomar el valor de los datos introducidos en los inputs...
//Respectivamente.

let newcuento = document.getElementById("button")
let cfinal = document.getElementById("p_cuento")
let prota = document.getElementById("id_a")
let villa = document.getElementById("id_b")

//Creamos el evento del botón, para que se seleccione un cuento aleatorio con la funcion seleccionarCuento,
//Usamos los métodos de la segunda clase para asignar tanto ambos nombres (protagonista y villano), como
//los datos obtenidos en los inputs al cuento que se va a mostrar.

//Finalmente, llamamos al atributo que contiene el cuento modificado para ser mostrado en pantalla.

newcuento.addEventListener("click", function(){
    let cuento = generador.seleccionarCuento();
    editor.editarNombres(prota.value, villa.value);
    editor.editarCuento(cuento);
    
    cfinal.innerHTML = editor.final;


})






