'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        eslint: {
            target: ['src/jquery.bindObjProp.js'],
            options: {
                configFile: 'conf/eslint.json'
            }
        },
        qunit: {
            all: ['tests/*.html']
        },
        uglify: {
            dist: {
                files: {
                    'src/jquery.bindObjProp.min.js': ['src/jquery.bindObjProp.js']
                }
            }
        },
        watch: {
            files: ['tests/index.html', 'src/jquery.bindObjProp.js'],
            tasks: ['default']
        }
    });

    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['eslint', 'qunit']);
    grunt.registerTask('min', ['uglify']);
};