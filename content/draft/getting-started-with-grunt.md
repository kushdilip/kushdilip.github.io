+++
date = "1970-01-01T05:30:00+05:30"
draft = true
title = "Getting started with grunt"
slug = "getting-started-with-grunt"
aliases = [
	"getting-started-with-grunt"
]
+++
http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/

```
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    distFolder: 'dist',
    pkg: grunt.file.readJSON('package.json'),

    copy: {
      build: { 
        files: [
            { expand : true, 
              src: ['*.html'], 
              dest: 'dist/',
            }
          ]
      }
    },

    concat: {
      // options: {
      //   separator: ';'
      // },
      vendorjs: {
        src: ['vendor/jquery/dist/jquery.min.js',
              'vendor/handlebars/handlebars.min.js',
              'vendor/moment/min/moment.min.js'],
        dest: '<%= distFolder %>/js/vendor.js'
      },
      mainjs: {
        src: ['js/hbs.js'],
        dest: '<%= distFolder %>/js/main.js'
      },
      vendorcss: {
        src: ['vendor/bootstrap/dist/css/bootstrap.min.css'],
        dest: '<%= distFolder %>/styles/vendor.css'
      },
      maincss: {
        src: ['style/style.css'],
        dest: '<%= distFolder %>/styles/main.css'
      }
    },

    clean: ['dist/*']
   });

  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('build', ['clean','concat', 'copy']);

  // Load the plugin that provides the "uglify" task.
  // grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  // grunt.registerTask('default', ['uglify']);

};
```

```
{
  "name": "handlebars-credit-bureau-template",
  "version": "0.0.0",
  "devDependencies": {
  	"grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0",
    "grunt-contrib-concat": "~0.5.0",
    "grunt-contrib-copy": "~0.5.0",
    "grunt-contrib-clean": "~0.5.0"
  }
}
```