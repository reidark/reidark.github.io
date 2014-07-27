'use strict';

module.exports = function(grunt) { 
  
    // Load all tasks 
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks); 
  
    // Configuração do projeto 
    grunt.initConfig({ 
        // Compile Less 
        less: {
            'assets/css/style.css': ['assets/css/style.less'] 
        },
        // Minficar o Javascript
          uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'assets/js/scripts.min.js': ['assets/js/scripts.js']
              }
            }
          },
        // Reorganize Media Queries
        cmq: {
            options: {
                log: true
            },
            dynamic: {
                expand: true,
                cwd: 'assets/css/',
                src: ['*.css'],
                dest: 'assetscss/'
            } 
        }, 
        // Minify CSS
        cssmin : { 
            css:{ 
                src: 'assets/css/style.css',
                dest: 'assets/css/style.min.css',
            },
        },
        smushit: { 
            mygroup: { 
                src: ['assets/img/*.png','assets/img/*.jpg'],
                dest: 'assets/img/'
            } 
        },
        // Atualizar 
        watch: {
            styles: {
                // Which files to watch (all .less files recursively in the less directory) 
                files: ['assets/css/*.less','assets/css/style.css', 'Gruntfile.js', 'assets/js/*.js'],
                tasks: ['less','cmq','cssmin','uglify'],
                options: {
                    nospawn: true
                } 
            } 
        }
         
    }); 
    // registrando tarefa default 
   grunt.registerTask( 'default', ['watch'] );
   grunt.registerTask( 'img', ['smushit'] );
};