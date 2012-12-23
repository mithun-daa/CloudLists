define(['use!backbone', 'models/ListTemplateModel'], function(B, ListTemplateModel) {
  var Collection = B.Collection.extend({model: ListTemplateModel.Model});

  return {
  	Collection: Collection
  };
});