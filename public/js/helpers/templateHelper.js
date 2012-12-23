define(['use!underscore', 'jquery'], function(_, $) {
  	return function(id){
  		return _.template($('#' + id).html());
	};
});