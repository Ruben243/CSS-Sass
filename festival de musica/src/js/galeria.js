document.addEventListener('DOMContentLoaded', crearGaleria());


function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for (let index = 1; index <= 12; index++) {
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${index}.webp`;
        imagen.width=200;
        imagen.height=133;
        imagen.alt=`imagen ${index} galeria`

        imagen.dataset.imagenId = index;
        //añadir la funcion mostrarImagen
        imagen.onclick = mostrarImagen;


        const lista = document.createElement('li');
        lista.appendChild(imagen);
        galeria.appendChild(lista);



    }


}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;
    imagen.alt="imagen"
    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    //cuando se da click se cierra la imagen

    overlay.onclick=function(){
        overlay.remove();
    }

    //boton para cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = ('X');
    cerrarImagen.classList.add('btn-cerrar')
    overlay.appendChild(cerrarImagen);

    //cuando se presiona cierra la imagen
    cerrarImagen.onclick = function () {
            overlay.remove();
            body.classList.remove('fijar-body')
    }

    //mostrar en el body
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body');


}