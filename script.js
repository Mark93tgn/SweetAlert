const $btnSimple = document.querySelector("#btnSimple"),
    $btnBotonPersonalizado = document.querySelector("#btnBotonPersonalizado"),
    $btnTituloYTexto = document.querySelector("#btnTituloYTexto"),
    $btnHtmlPersonalizado = document.querySelector("#btnHtmlPersonalizado"),
    $btnConfirm = document.querySelector("#btnConfirm"),
    $btnInput = document.querySelector("#btnInput");

$btnSimple.addEventListener("click", () => {
    Swal.fire("Esta es una alerta")
        .then(() => {
            // Aquí la alerta se ha cerrado
            console.log("Alerta cerrada");
        });
});

$btnBotonPersonalizado.addEventListener("click", () => {
    Swal.fire({
        title: "Evento realizado",
        confirmButtonText: "Aceptar",
    });
});


$btnTituloYTexto.addEventListener("click", () => {
    Swal.fire({
        title: "Evento realizado",
        text: "Evento guardado con el id 123456",
        confirmButtonText: "Aceptar",
    });
});


$btnHtmlPersonalizado.addEventListener("click", () => {
    Swal.fire({
        html: `<h1>Evento creado</h1>
    <p>Evento guardado con el id <strong>12321312</strong></p>
    <br>
    <a href="#">Imprimir ticket</a>
    `,
    });
});

$btnConfirm.addEventListener("click", () => {

    Swal
        .fire({
            title: "ID #123465",
            text: "¿Eliminar?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        })
        .then(resultado => {
            if (resultado.value) {
                // Hicieron click en "Sí"
                console.log("*se elimina*");
            } else {
                // Dijeron que no
                console.log("*NO se elimina*");
            }
        });
});


$btnInput.addEventListener("click", () => {
    Swal
        .fire({
            title: "Tu nombre",
            input: "text",
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            inputValidator: nombre => {
                // Si el valor es válido, debes regresar undefined. Si no, una cadena
                if (!nombre) {
                    return "Por favor escribe tu nombre";
                } else {
                    return undefined;
                }
            }
        })
        .then(resultado => {
            if (resultado.value) {
                let nombre = resultado.value;
                console.log("Hola, " + nombre);
            }
        });
});