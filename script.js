if (window.location.pathname.includes('formulario.html')) {
emailjs.init('hQ7twyONR2TY835fv');

document.getElementById('employee-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const sueldo = document.getElementById('sueldo').value;
    const mensaje = document.getElementById('mensaje').value;

    const datos = {
        nombre: nombre,
        sueldo: sueldo,
        mensaje: mensaje
    };

    emailjs.send('service_0tb3a2z', 'template_itu2gp4', datos)
        .then(() => {
            document.getElementById('resultado').textContent = "Mensaje enviado correctamente.";
        })
        .catch(() => {
            document.getElementById('resultado').textContent = "Error al enviar el mensaje.";
        });
});
}
if (window.location.pathname.includes('tabla.html')) {
function calcularSalario() {
    const salario = prompt("Ingresa el salario:");
    const descuento = prompt("Ingresa el descuento:");
    const total = salario - descuento;
    alert(`El total del salario después del descuento es: ${total}`);
}

function calcularPuntos() {
    const puntos = [];
    for (let i = 1; i <= 3; i++) {
        puntos.push(parseFloat(prompt(`Ingresa el puntaje ${i}:`)));
    }
    const total = puntos.reduce((acc, curr) => acc + curr, 0);
    alert(`El total de puntos es: ${total}`);
}

function calcularPorcentaje() {
    const puntaje = parseFloat(prompt("Ingresa el puntaje:"));
    const porcentaje = puntaje * 0.15;
    alert(`El 15% del puntaje ingresado es: ${porcentaje}`);
}

}
