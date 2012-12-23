require(['models/ListTemplateModel',
		'views/ListTemplate/list',
		'views/ListTemplates/list',
		'collections/ListTemplateCollection',
		'helpers/templateHelper',
		'use!underscore'], 
	function(ListTemplateModel, ListTemplateView, ListTemplatesView, ListTemplates, Template, _){
	var template = new ListTemplateModel.Model({
		title: 'This is a test'
	});

	var templateView = new ListTemplateView.View({model: template});
	var colltest = new ListTemplates.Collection([{title: 'Title1'},{title: 'Title1'},{title: 'Title1'}]);
	var ltViews = new ListTemplatesView.View({collection: colltest});
	$('.listTemplates').html(ltViews.render().el);
});