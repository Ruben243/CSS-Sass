document.addEventListener('DOMContentLoaded', function () {
    scrollNav();
    navegacionFixed()
});

function navegacionFixed() {
    const barra=document.querySelector('.header');
    //registrar el intersection Observer
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
          barra.classList.remove('fijo');
        } else {
          barra.classList.add('fijo');
        }

    })

    //elemento a obeservar
    observer.observe(document.querySelector('.sobre-festival'))
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a');
    //no se puede anclar un listener a un listado,con este blucle se arregla
    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function (e) {
            e.preventDefault();
            const seccion = document.querySelector(e.target.attributes.href.value);

            seccion.scrollIntoView({
                behavior: 'smooth'
            });


        })
    });
}


