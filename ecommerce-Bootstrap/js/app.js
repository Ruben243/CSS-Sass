const modalImg = document.querySelector('#modal-imagen');
if (modalImg) {
    modalImg.addEventListener('show.bs.modal', function (event) {

        const enlace = event.relatedTarget;
        const rutaImagen = enlace.getAttribute('data-bs-imagen');

        // construir la imagen
        const imagen = document.createElement('IMG');
        imagen.src = `../img/${rutaImagen}.jpg`;
        imagen.classList.add('img-fluid');
        imagen.alt = 'Imagen galeria';

        const contenidoModal = document.querySelector('.modal-body');

        contenidoModal.appendChild(imagen);


    })

    modalImg.addEventListener('hidden.bs.modal', function () {
        const contenidoModal = document.querySelector('.modal-body');
        contenidoModal.textContent = '';

    })


}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

