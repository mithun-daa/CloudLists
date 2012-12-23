define(['use!backbone', 'views/ListTemplate/list'], function(B, ListTemplateView) {
  	var View = B.View.extend({
  		tagName: 'ul',
  		render: function() {
  		  this.collection.each(addOne, this);
  		  return this;
  		}
  	});

 	function addOne (task) {
 		var listtemplateview = new ListTemplateView.View({model: task});
 		this.$el.append(listtemplateview.render().el);
 	}

 	return {
 		View: View
 	}
})