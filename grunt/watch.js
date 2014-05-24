module.exports = {
    options: {
        livereload: true
    },
    scripts: {
        files: ['dev/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false
        }
    },
    css: {
        files: ['dev/sass/main.scss'],
        tasks: ['sass'],
        options: {
            livereload: true,
            spawn: false
        }
    }
}