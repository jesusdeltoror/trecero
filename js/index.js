//en el import, estamos importando las dos clases echas en el  archivo .clases.js.
import { GeneradorDeCuentos, EditorDeCuentos } from "./clases.js"; 


//instanciamos las dos clases importadas de la linea de arriba
let generador = new GeneradorDeCuentos()
let editor = new EditorDeCuentos()

//generador.generarCuento(); // este metodo nos deja agregar un cuarto cuento a la lista de cuentos que ya tenemos.

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






