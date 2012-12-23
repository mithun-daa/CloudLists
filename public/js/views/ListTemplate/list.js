define(['use!backbone', 'models/ListTemplateModel', 'helpers/templateHelper'], function(B, ListTemplateModel, Template) {
	var View = B.View.extend({
		tagName: 'li',
		events: {
			'click .edit': 'editListTemplate',
			'click .delete': 'deleteListTemplate'
		},
		template: Template('tasksTemplate'),
		render: function() {
		  this.$el.html(this.template(this.model.toJSON()));
		  return this;	
		},
		editListTemplate: function() {
		  alert('editing');
		},
		deleteListTemplate: function() {
		  alert('deleting');
		}
	});

	return {
		View: View
	}
});