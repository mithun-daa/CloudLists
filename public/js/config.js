require.config({
	deps: ['main'],
	paths: {
		'use': 'libs/use',
		'jquery': 'libs/jquery',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone'
	},
	use: {
		backbone:{
			deps: ['underscore', 'jquery'],
			attach: 'Backbone'
		},
		underscore:{
			attach: '_'
		}
	}
});