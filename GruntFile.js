module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.initConfig({
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'css',
                    ext: '.min.css'
                }]
            }
        },
        svg_sprite: {
            options: {
                // Task-specific options go here.
            },
            images: {
                expand: true,
                cwd: 'images/colored',
                src: ['**/*.svg'],
                dest: 'images',
            },
        }
    });
    grunt.registerTask('default', ['cssmin']);
};