module.exports = function(grunt) {
    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            sources: {
            	options: {
            		jshintrc: '.jshintrc'
            	},
                src: ['lib/**/*.js']
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['jshint']);
};
