module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          js: {
             src: ["../javaScripts/main.js"],
             dest: "../dist/app.js"
          },
          options: {
             browserifyOptions: {
                paths: [
                   "./node_modules"
                ]
             }
          }
       },  
       watch: {
          javascripts: {
             files: ["../javaScripts/**/*.js"],
             tasks: ["jshint", "browserify"]
          },
          browserify: {
             files: ["../javaScripts/*.js"],
             tasks: ["browserify"]
          }
       }
    });
     require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", [, "browserify", "watch"]);
 };