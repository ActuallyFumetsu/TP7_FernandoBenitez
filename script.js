emailjs.init("EroRhSfyHAcDiFRdF");

document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); 

    const templateParams = {
        nombre: document.getElementById("nombre").value,
        sueldo: document.getElementById("sueldo").value,
        mensaje: document.getElementById("mensaje").value,
    };

    emailjs.send("service_0tb3a2z", "template_itu2gp4", templateParams)
        .then((response) => {
            console.log("Correo enviado con éxito", response.status, response.text);
            alert("Mensaje enviado correctamente.");
        })
        .catch((error) => {
            console.error("Error al enviar el correo:", error);
            alert("Hubo un problema al enviar el mensaje: " + error.text);
        });
});
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
