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

function mostrarInfo(info) {
    if (document.querySelector('#info')) {
        document.querySelector('#info').remove();
    }
    const div = document.createElement('div');
    div.setAttribute('id', 'info');
    const p1 = document.createElement('p');
    p1.textContent = `MakeId: ${info.MakeId}`;
    const p2 = document.createElement('p');
    p2.textContent = `MakeName: ${info.MakeName}`;
    const p3 = document.createElement('p');
    p3.textContent = `VehicleTypeId: ${info.VehicleTypeId}`;
    const p4 = document.createElement('p');
    p4.textContent = `VehicleTypeName: ${info.VehicleTypeName}`;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);

    document.querySelector('main').appendChild(div);
}

function autoCompletado(e) {
    //Función que se ejecuta cada vez que se introduce un valor en el input
    // se debe crear un option por cada elemento que quede en el array 
    const value = e.target.value.toUpperCase();
    const arrayFiltrado = filtradoTerminoEnArray(arrayCoches, value);

    limpiarDatalist();
    if (arrayFiltrado.length === 0) {
        const option = document.createElement('option');
        option.setAttribute('value', ' ');
        option.textContent = `No hay coincidencias con ${value}`;
        datalist.appendChild(option);
    } else if (arrayFiltrado.length === 1) {
        mostrarInfo(arrayFiltrado[0]);
    } else {
        arrayFiltrado.forEach(e => {
            const option = document.createElement('option');
            option.setAttribute('value', e.MakeName);
            option.textContent = e.MakeName;
            datalist.appendChild(option);
        })
    };
}

campoInputMarcasHTML.addEventListener('input', autoCompletado);