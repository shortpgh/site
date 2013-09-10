'use strict';

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        // Task configuration.
        jekyll: {
            server : {
                src : '.',
                dest: 'dev',
                server : true,
                server_port : 8000,
                auto : true
            },
            dev: {
                src: '.',
                dest: 'dev'
            },
            prod: {
                src: '.',
                dest: 'prod'
            }
        },
        watch: { // for development run 'grunt watch'
            jekyll: {
                files: ['*.html'],
                tasks: ['jekyll:dev']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');

    // Default task.
    grunt.registerTask('default', 'jekyll:server');
};
