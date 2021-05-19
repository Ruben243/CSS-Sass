//configuracion de gulp
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify')
const webp = require('gulp-webp');
const concat = require('gulp-concat');


//utilidades css

const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const sourcemaps = require('gulp-sourcemaps');

//utilidades Js
const terser = require('gulp-terser-js')
const rename=require('gulp-rename');


const paths = {
    imagenes: 'src/img/**/*',
    scss: './src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

//Funcion que complila sasss
function compilarSass() {
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.'))
        .pipe(dest("./build/css"))
}


function javascript() {
    return src(paths.js)
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(rename({ suffix:'.min'}))
        .pipe(dest('build/js'))
}


function imagenes() {
    return src(paths.imagenes)
        .pipe(imagemin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'imagenes minificadas' }))
}


function versionWebp() {
    return src(paths.imagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'version webp lista' }));

}

function watcharchivos() {
    watch(paths.scss, compilarSass); // *=carpeta actual **=todos los archivos  */
    watch(paths.js, javascript); // *=carpeta actual **=todos los archivos  */
}





//funcion en gulp=funcion escrita en el fichero
exports.compilarSass = compilarSass;
exports.imagenes = imagenes;
exports.watcharchivos = watcharchivos;

exports.default = series(compilarSass, javascript, imagenes, versionWebp, watcharchivos);