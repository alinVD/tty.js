module.exports = function(grunt) {
    var babelify = require('babelify');

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            sources: {
            	options: {
            		jshintrc: '.jshintrc'
            	},
                src: ['lib/**/*.js']
            },
            webSources: {
                options: {
                    jshintrc: 'web-lib/.jshintrc'
                },
                src: ['web-lib/**/*.js']
            }
        },
        browserify: {
            web: {
                files: {
                    'tty.js': ['web-lib/exports.js']
                },
                options: {
                    browserifyOptions: {
                        standalone: 'tty',
                        debug: true
                    },
                    transform: [
                        babelify.configure({
                            optional: ['runtime']
                    })]
                }
            }
        },
        uglify: {
            web: {
                files: {
                    'tty.min.js': 'tty.js'
                },
                options: {
                    sourceMap: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('build', ['jshint:webSources', 'browserify:web', 'uglify:web']);
    grunt.registerTask('default', ['jshint']);
};
