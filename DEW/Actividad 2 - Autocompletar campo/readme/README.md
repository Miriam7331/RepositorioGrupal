# ConsultaCoches

En esta actividad vamos a desarrollar una función de autocompletado, de manera que cuando el usuario empiece a escribir le vayan saliendo las posibles opciones tal y cómo se muestra en la siguiente imagen:

![imagen](https://github.com/gastbr/DAW.2--etc/blob/main/DEW/UT3/Actividad%202%20-%20Autocompletar%20campo/readme/1.png?raw=true)

Usaremos el elemento datalist de HTML que va a facilitar el trabajo. El id del datalist debe ser el mismo que el atributo list del input, de esta forma a medida que escribes en el input podrás mostrar las opciones del datalist.

![imagen](https://github.com/gastbr/DAW.2--etc/blob/main/DEW/UT3/Actividad%202%20-%20Autocompletar%20campo/readme/2.png?raw=true)

Vamos a tratar de realizar funciones lo más refactorizadas posible y así poder usarlas en futuros proyectos. 

function filtradoTerminoEnArray(arrayDatos, termino){

    // arrayDatos con todos los datos dónde buscar

    // termino a buscar

    // retorna el array ya con los nuevosDatos

   

}

function autoCompletado(e){

    //Función que se ejecuta cada vez que se introduce un valor en el input

    // se debe crear un option por cada elemento que quede en el array

}

 

Estas funciones sólo son consejos, no es obligatorio hacerlas, si consideras que hay una función mejor, creala. 

 

Se va a trabajar con un array de coches obtenidos de la consulta de una API, cada elemento del array tiene objetos con los siguientes atributos:

    // MakeId: 5042

    // MakeName: "COSTIN SPORTS CAR"

    // VehicleTypeId: 2

    // VehicleTypeName: "Passenger Car"

   




Para realizar esta actividad se pide:

    Que cuando el usuario empiece a escribir se vayan mostrando automáticamente las opciones según los valores introducidos por el usuario, usando el atributo MakeName de los objetos del array.

    Una vez seleccionada una de las opciones se debe mostrar un recuadro debajo del buscador con toda la información del objeto. 

    En caso de que el usuario introduzca un valor que no se encuentra se le debe avisar.

    Reto : para obtener mayor nota trata de que el texto introducido por el usuario se marque en negrita, tal y cómo se muestra en la imagen:

![imagen](https://github.com/gastbr/DAW.2--etc/blob/main/DEW/UT3/Actividad%202%20-%20Autocompletar%20campo/readme/3.png?raw=true)