/***************************
 * Imports
 **************************/
import browserSync    from   'browser-sync';
import babel          from   'gulp-babel';
import autoprefixer   from   'gulp-autoprefixer';
import concatCSS      from   'gulp-concat-css';
import concatJS       from   'gulp-concat';
import nodemon        from   'gulp-nodemon';
import eslint         from   'gulp-eslint';
import gulp           from   'gulp';
import imagemin       from   'gulp-imagemin';
import install        from   'install';
import minifyCSS      from   'gulp-clean-css';
import minifyJS       from   'gulp-minify';
import npm            from   'npm';
import plumber        from   'gulp-plumber';
import rename         from   'gulp-rename';
import sass           from   'gulp-sass';
import sourcemaps     from   'gulp-sourcemaps';
import watch          from   'gulp-watch';

/***************************
 * Helpers
 **************************/
class Options {
    constructor (obj, key) {
        this.obj = obj
        this.options(key)
    }
    options (key) {
        return arguments.length <= 0 ? this.obj : this.obj[key];
    }
}

const returnFiles  = (root, files) => {
    const arr = [],
          len = files.length;
    for(let file in files) {
        let newfile = root + files[file];
        arr.push(newfile);
    }
    return arr;
}

/***************************
 * Options
 **************************/
const
    browsersync                 =   browserSync.create(),
    reload                      =   browserSync.reload,
    autoprefixerOptions         =   new Options({ browsers: ['last 2 versions'], cascade: false }),
    gulpBabel                   =   new Options({ presets: 'es2015' }),
    gulpRename                  =   new Options({ fileNameCSS: 'main.css', fileNameJS: 'main.js', baseName: 'main', extName: '.js' }),
    gulpImageMinify             =   new Options({ progressive: true, optimizationLevel: 5 });

/***************************
* Variables
**************************/
const
    renameFileNameJS            =   gulpRename.options('fileNameJS'),
    mainCssFile                 =   'main.css',
    imageRoot                   =   './public/img/',
    jsRoot                      =   './public/js/',
    cssRoot                     =   './public/css/',
    cssDevRoot                  =   './public/css/dev/',
    allImages                   =   './public/img/dev/*.*',
    allSassFiles                =   './public/css/dev/sass/**/*.scss',
    allReactFiles               =   './public/js/react/**/*.js',
    allJSFiles                  =   './public/js/dev/**/*.js',
    allHtmlFiles                 =   './public/**/*.html',
    devCssDir                   =   './public/css/dev/',
    devJSDir                    =   './public/js/dev/',
    jsFiles                  =   returnFiles(devJSDir, ['jquery.js', 'bootstrap.min.js', 'main.es6.js']),
    cssFiles                 =   returnFiles(devCssDir, ['bootstrap.min.css', 'font-awesome.min.css', 'main.css']);

/***************************
* Development
**************************/

// Scripts
gulp.task('js', () => {
    return gulp.src(jsFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(babel(gulpBabel.options()))
        .pipe(concatJS(renameFileNameJS))
        .pipe(minifyJS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(jsRoot))
        .pipe(browserSync.stream());
});

// SASS
gulp.task('sass', () => {
    return gulp.src(allSassFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(cssDevRoot))
});

// CSS
gulp.task('css', ['sass'], () => {
    return gulp.src(cssFiles)
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(concatCSS(mainCssFile))
        .pipe(minifyCSS())
        .pipe(gulp.dest(cssRoot))
        .pipe(browserSync.stream());
});

// Images
gulp.task('img', () => {
  return watch(allImages, () => {
    gulp.src(allImages)
      .pipe(plumber())
      .pipe(imagemin(gulpImageMinify.options()))
      .pipe(gulp.dest(imageRoot))
      .pipe(browserSync.stream());
  });
});

// Gulp Nodemon
gulp.task('nodemon', function(cb) {
    let started = false;

    return nodemon({
        script: 'app.js',
        ignore: [
            "gulpfile.babel.js",
            "node_modules/",
            "public/**/*.js"
        ],
        ext: 'js ejs',
        env: {
            'NODE_ENV': 'development',
            'DEBUG': 'appname:*'
        }
    }).on('start', function() {
        if (!started) {
            cb();
            started = true;
        }
    }).on("restart", function() {
        setTimeout(function() {
            console.log('hit');
            browsersync.reload();
        }, 1000);
    });
});


// Browser-sync
gulp.task('connect', ['nodemon'], () => {
    browsersync.init(null, {
        proxy: 'http://localhost:3000',
        port: "3333",
        browser: "firefox"
    });
});

/***************************
 * Production
 **************************/
gulp.task('watch', ['connect'], function() {
    gulp.watch(allHtmlFiles).on('change', function () {
        browserSync.reload();
    });
    gulp.watch(allReactFiles).on('change', function () {
        setTimeout(function() {
            browserSync.reload();
        }, 1000);
    });
    gulp.watch(allJSFiles, ['js']);
    gulp.watch(allSassFiles, ['css']);
});

/***************************
 * Default
 **************************/
gulp.task('default', ['js', 'css', 'img', 'watch']);
