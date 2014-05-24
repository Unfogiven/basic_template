module.exports = {
    options: {
        browsers: ["last 10 version", "> 1%", "ie 8", "ie 7"]
    },
    dist: {
        files: {
            'final/css/main.css': 'dev/css/main.css'
        }
    }
}