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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['eslint', 'qunit']);
    grunt.registerTask('min', ['uglify']);
};