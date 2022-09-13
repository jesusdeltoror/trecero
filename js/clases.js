class GeneradorDeCuentos{
    // El constructor parte con 3 atributos que contienen un diccionario cada uno donde el primer valor hace referencia al primer nombre a cambiar, el segundo
    // al segundo nombre que se va a cambiar y el tercero es el cuento es cuestion, el ultimo atributo es un arreglo que contiene los 3 primeros atributos.

    constructor(){
        this.cuento1 = {
            "nombre1": "nombre1",
            "nombre2": "lobo",
            "cuento": "En el bosque vivían tres cerditos que decidieron construir una casa cada uno, para protegerse de un lobo que rondaba por allí. Uno de los cerditos llamado nombre1 hizo su casa de paja; otro, de madera y otro, con ladrillos.<br>\n\
            Un día el primer cerdito vio que se acercaba el lobo y entró corriendo en su casa de paja. El lobo sopló, la derribó y el cerdito se fue corriendo a la casa de madera, donde vivía su amigo.<br>\n\
            El lobo fue hasta la casa de madera, pero esta vez sopló más fuerte y también la derribó. Los dos cerditos salieron corriendo a la casa de ladrillos de su otro amigo.<br>\n\
            El lobo también fue hasta la puerta de esta casa, pero cuando sopló, no la pudo derribar. Los tres cerditos estaban muy contentos."
        },

        this.cuento2 = {
            "nombre1": "nombre1",
            "nombre2": "vecino",
            "cuento": "En una plaza pública había un señor llamado nombre1 que decía ser adivino y la gente le consultaba sobre lo que ocurriría en el futuro. Pero un día un vecino del adivino se le acercó y le dijo que unos ladrones habían entrado en su casa y que le habían robado todo. El adivino, desesperado, salió corriendo, pero un hombre lo frenó y le preguntó: “Si eres adivino, ¿cómo no sabías que te iban a robar?”. El adivino no supo qué contestarle."
        },

        this.cuento3 = {
            "nombre1": "Pedro",
            "nombre2": "lobo",
            "cuento": "Pedro era un pastor que siempre llevaba sus ovejas al campo. Un día, estaba muy aburrido y decidió hacer una broma: empezó a gritar que venía un lobo pero, en verdad, no había ninguno.<br>\n\
            La gente de la aldea salió corriendo a ayudar a Pedro, pero cuando llegaron solo vieron a Pedro riéndose a los gritos. Los aldeanos le dijeron que no podía mentir con ese tipo de cosas y que no era bueno hacer ese tipo de bromas.<br>\n\
            Al otro día, Pedro repitió la broma y los aldeanos volvieron a retarlo. Pasaron los días y Pedro seguía llevando sus ovejas a pastar. Un día estaba en el campo y vio que se acercaba un lobo, entonces, Pedro comenzó a gritar pidiendo ayuda.<br>\n\
            Esta vez, los aldeanos no le creyeron. Entonces, el lobo atacó a algunas de sus ovejas y Pedro salió corriendo. Desde ese día, Pedro no volvió a decir mentiras."
        },

        this.cuentos = [this.cuento1, this.cuento2, this.cuento3];
    }

    // Genera el diccionario de un cuento para que luego se pueda editar, los primeros dos parametros que pide son los strings del primer nombre y segundo nombre 
    // que se quieren cambiar dentro del cuento, el ultimo parametro hace referencia al cuento que quieres generar, al ultimo mete el diccionario dentro del arreglo
    // this.cuentos.
    generarCuento(primer_nombre, segundo_nombre, cuento_nuevo){
        let cuento_usu = {
            "nombre1": primer_nombre,
            "nombre2": segundo_nombre,
            "cuento": cuento_nuevo
        }

        this.cuentos.push(cuento_usu);

        console.log(this.cuentos);
    }

    // Escoge un cuento aleatorio de los cuentos disponibles dentro del arreglo this.cuentos (retorna el diccionario con el cuento).
    seleccionarCuento(){
        let random_number = Math.floor(Math.random() * this.cuentos.length);
        console.log(random_number);
        console.log(this.cuentos[random_number]);
        return this.cuentos[random_number]; 
        
    }
}

class EditorDeCuentos{
    constructor(){
        this.nombre1 = null,
        this.nombre2 = null, 
        this.final = null
    }

    // Cambia los dos atributos de la clase por los dos nombres que se van a utilizar.
    editarNombres(input1, input2){
        this.nombre1 = input1;
        this.nombre2 = input2;
        
    }

    // Usa un diccionario que contenga un cuento y los nombres a cambiar y edita el cuento cambiando los nombres a cambiar por los atributos de this.nombre1 y this.nombre2.
    editarCuento(cuento){
        let cuento_selec = cuento["cuento"];
        let nombre1 = cuento["nombre1"];
        let nombre2 = cuento["nombre2"];

        let primer_cambio = cuento_selec.replace(RegExp(nombre1, "g"), this.nombre1);
        let segundo_cambio = primer_cambio.replace(RegExp(nombre2, "g"), this.nombre2);
            this.final=  segundo_cambio;

            return this.final;
    }

}

export {GeneradorDeCuentos, EditorDeCuentos};