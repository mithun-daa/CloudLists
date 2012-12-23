define(['use!backbone'], function(B){
	var Model = B.Model.extend({
		defaults: {
			name: 'default template'
		}
	});

	return{
		Model: Model
	};
})