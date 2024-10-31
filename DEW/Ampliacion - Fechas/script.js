dayjs.locale('es');
const mensaje = document.querySelector('#mensaje');

function loadEvents() {
    document.querySelector('form').addEventListener('submit', mostrarMensaje);
}

function mostrarMensaje(e) {
    e.preventDefault();
    const nombre = e.target.nombre.value? e.target.nombre.value.charAt(0).toUpperCase() + e.target.nombre.value.slice(1) : "Sinnombre"
    const nacimiento = dayjs(e.target.fecha.value);
    const hoy = dayjs();

    const edad = Number(hoy.diff(nacimiento, 'year'));
    const edadDias = Number(hoy.diff(nacimiento.add(edad, 'year'), 'day'));

    mensaje.style.display = 'block';

    if ((edad == 18 || edad == 25) && edadDias == 0) {
        mensaje.textContent = `${nombre}, tienes un descuento especial del 20%.`;
    } else if (edad > 18 && edad < 25 || (edad == 18 && edadDias != 0)) {
        mensaje.textContent = `${nombre}, tienes un 10% de descuento.`;
    } else if (nacimiento.isAfter(hoy)) {
        mensaje.textContent = `Para ganar algo tienes que nacer primero, ${nombre}.`;
    } else if (edad < 18 && edad >= 0 && edadDias >= 0) {
        const fechaMayor = nacimiento.add(18, 'year').format('dddd[,] DD [de] MMMM [de] YYYY');
        mensaje.textContent = `Eres menor de edad, ${nombre}, no podemos darte de alta hasta el día ${fechaMayor}.`;
    } else if (edad >= 25) {
        mensaje.textContent = `Lo sentimos, ${nombre}, pero no tienes descuento.`;
    } else {
        mensaje.textContent = "ERR";
        console.log('Edad:');
        console.log(edad);
        console.log(edadDias);
    }
}

loadEvents();