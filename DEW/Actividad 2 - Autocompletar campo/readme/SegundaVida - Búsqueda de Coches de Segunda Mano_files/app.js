let arrayCoches;
const campoInputMarcasHTML = document.getElementById('marca');
const datalist = document.querySelector('#marcas');
// const sugerencias = document.querySelector('.sugerencias');

async function consultaApiCochesInfo() {
    return fetch("https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json")
        .then(function (resultadoEnBruto) {
            return resultadoEnBruto.json();
        })
        .then(function (resultadoJSON) {
            return resultadoJSON;
        })
        .catch(function (error) {
            console.log('Error promesa: ${error}');
        });
}

window.addEventListener('load', async () => {
    const listadoCoches = await consultaApiCochesInfo();
    arrayCoches = listadoCoches.Results;
    // Devuelve un array de objetos con la siguiente estructura:
    // MakeId: 5042
    // MakeName: "COSTIN SPORTS CAR"
    // VehicleTypeId: 2
    // VehicleTypeName: "Passenger Car"
});

function filtradoTerminoEnArray(arrayDatos, termino) {
    // arrayDatos con todos los datos dónde buscar
    // termino a buscar
    // retorna el array ya con los nuevosDatos
    return arrayDatos.filter((e) => e.MakeName.toUpperCase().includes(termino));
}

function limpiarDatalist() {
    while (datalist.lastChild) {
        datalist.removeChild(datalist.lastChild);
    }
}

function mostrarInfo(e) {
    console.log(e.target.textContent);
}

function autoCompletado(e) {
    //Función que se ejecuta cada vez que se introduce un valor en el input
    // se debe crear un option por cada elemento que quede en el array 
    const value = e.target.value.toUpperCase();
    const arrayFiltrado = filtradoTerminoEnArray(arrayCoches, value);

    limpiarDatalist();
    if (arrayFiltrado.length === 0) {
        const option = document.createElement('option');
        option.setAttribute('value', '');
        option.textContent = `No hay coincidencias con ${value}`;
        datalist.appendChild(option);
    } else {
        arrayFiltrado.forEach(e => {
            const option = document.createElement('option');
            option.setAttribute('value', e.MakeName);
            option.textContent = e.MakeName;
            option.addEventListener('click', mostrarInfo);
            datalist.appendChild(option);
        })
    };
}

campoInputMarcasHTML.addEventListener('input', autoCompletado);