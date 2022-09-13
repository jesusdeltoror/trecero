//en el import, estamos importando las dos clases echas en el  archivo .clases.js.
import { GeneradorDeCuentos, EditorDeCuentos } from "./clases.js"; 


//instanciamos las dos clases importadas de la linea de arriba
let generador = new GeneradorDeCuentos()
let editor = new EditorDeCuentos()

// este metodo nos deja agregar un cuarto cuento a la lista de cuentos que ya tenemos.
generador.generarCuento("leon","lobo","Vagaba cierto día lobo por lugares solitarios a la hora en que el sol se ponía en el horizonte, y, viendo su sombra bellamente alargada, exclamó: <br> -“¿Cómo me va a asustar el leon con semejante talla que tengo? ¡Con treinta metros de largo, bien fácil me será convertirme en rey de los animales!”. <br> Y mientras soñaba con su orgullo, El poderoso leon le cayó encima y empezó a devorarlo. Entonces lobo, cambiando de opinión se dijo: <br> -“La presunción es causa de mi desgracia”." 
);


let newcuento = document.getElementById("button")
let cfinal = document.getElementById("p_cuento")



let prota = document.getElementById("id_a")
let villa = document.getElementById("id_b")

newcuento.addEventListener("click", function(){
    let cuento = generador.seleccionarCuento();
    editor.editarNombres(prota.value, villa.value);
    editor.editarCuento(cuento);
    
    cfinal.innerHTML = editor.final;


})






