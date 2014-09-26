module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      scripts: {
        files: [
          'index.html',
          'app/**/*.js',
          'Gruntfile.js'],
        tasks: ['default'],
        options: {
          spawn: false,
        }
      },
      templates: {
        files: 'app/templates/**/*.hbs',
        tasks: 'emberTemplates',
        options: {
          spawn: false,
        }
      }
    },
    jshint: {
      all: [
      'Gruntfile.js',
      'app/app.js',
      'app/config.js']
    },
    emberTemplates: {
      compile: {
        files: {
          "app/templates.js":"app/templates/*.hbs"
        },
        options: {
          concatenate: true,
          templateFileExtensions: /\.hbs/,
          templateBasePath: /app\/templates\//
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-ember-templates');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('template', ['emberTemplates']);
  grunt.registerTask('default', ['jshint', 'emberTemplates']);
};
