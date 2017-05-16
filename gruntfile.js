module.exports = function(grunt) {

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/* SASS */
		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none',
					precision: 2,
					update: true
				},
				files: {
					// målfil : källfil
					'dist/css/style.css' : 'src/scss/style.scss'
				}
			}
		},

		/* POST CSS */
		postcss: {
			options: {
				map: false,
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'}),
					require('cssnano')()
				]
			},
			dist: {
				src: 'css/*.css'
			}
		},

		/* JSCS */
		jscs: {
			src: 'src/js/*.js',
			options: {
				'preset': 'google',
				
			}
		},

		/* UGLFIGY */
		uglify: {
			options: {
				beautify: false,
				preserveComments: false,
				quoteStyle: 1,
				compress: {
					drop_console: true
				}
			},
			build: {
				files: [{
					expand: true,
					src: 'src/js/*.js',
					dest: 'js/',
					flatten: true,
					rename: function(destBase, destPath) {
						return destBase+destPath.replace('.js', '.min.js');
					}
				}]
			}
		},

		/* CONCAT */
		concat: {
			options: {
				separator: '\n'
			},
			dist: {
				src: ['src/js/script.js'],
				dest: 'dist/js/script.js'
			}
		},

		/* WATCH */
		watch: {
			css: {
				files: ['**/*.scss'],
				tasks: ['sass', 'postcss']
			},
			js: {
				files: ['src/js/script.js'],
				tasks : ['jscs', 'concat', 'uglify']
			},
			options: {
				nospawn: true
			}
		}
	});
	grunt.registerTask('default', ['watch']);
};
