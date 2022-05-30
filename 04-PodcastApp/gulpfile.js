const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const purgecss = require('gulp-purgecss');
const rename = require('gulp-rename')
async function css(done) {
    // Identificar el archivo principal
    src('src/scss/app.scss')
        // Compilar Sass
        .pipe(sass())
        // Exportar o guardar
        .pipe(dest('build/css'));
    done();
}
//Controla los cambios en todos los .scss en cualquien carpeta dentro de src/scss
async function dev() {
    watch('src/scss/**/*.scss', css);
}

// Minificar imagenes
async function imagenes(done) {
    //identificar carpeta de origen
    src('src/img/**/*')
        //optimizar las imagenes de cualquier formato min=1 max=5
        .pipe(imagemin({ optimizationLevel: 3 }))
        //guardar las imagenes
        .pipe(dest('build/img'))
    done();
}
function cssBuild(done) {
    src('build/css/app.css')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(purgecss({
            content: ['index.html']
        }))
        .pipe(dest('build/css'))


    done();
}

exports.css = css;
exports.dev = dev;
exports.imagenes = imagenes;
exports.build = series(cssBuild);
exports.default = series(imagenes, css, dev);//varias tareas en serie
