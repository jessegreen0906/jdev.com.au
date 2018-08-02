module.exports = function(grunt) {
	
	const sassC = require('../../node-sass/bin/node-sass');
	
	grunt.initConfig({
		// Compile Sass to CSS
		sass: {
			options: {
				implementation: sassC
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'src/',
					src: ['**/*.scss'],
					dest: 'src/',
					ext: '.css'
				}]
			}
		},
		// Transpile ES6 to JS
		// babel: {
		// 	options: {
		// 		presets: [
		// 			[
		// 				"env",
		// 				"react"
		// 			]
		// 		]
		// 	},
		// 	dist: {
		// 		files: [{
		// 			expand: true,
		// 			cwd: 'src/',
		// 			src: ['**/*.js'],
		// 			dest: 'dist/',
		// 			ext: '.js'
		// 		}]
		// 	}
		// },
		//
		// // Transpile ReactJSX to JS
		// reactjsx: {
		// 	all: {
		// 		files:[{
		// 			expand: true,
		// 			src: [
		// 				'./**/*.jsx'
		// 			],
		// 			ext: '.js'
		// 		}]
		// 	}
		// },
		
		// Move static resources to build directory
		copy: {
			main: {
				// src: './src',
				// dest: './build/'
				files: [
				// 	{expand: true, cwd: 'src/', src: ['**/*.html', '**/*.css', '**/*.js'], dest: '../build/'},
				]
			}
		}
	});
	
	grunt.loadNpmTasks('../node_modules/grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	// grunt.loadNpmTasks('../node_modules/grunt-babel');
	// grunt.loadNpmTasks('../node_modules/grunt-reactjsx');
	
	grunt.registerTask('default', ['sass','copy']);
	// grunt.registerTask('transpileJs', ['babel']);
	// grunt.registerTask('transpileJs', ['reactjsx', 'babel']);
	grunt.registerTask('compile-sass', ['sass']);
	grunt.registerTask('copy-assets', ['copy']);
};