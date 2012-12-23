var Step = require('./step');
var templateCounter = 1;

TemplateProvider = function(){};
TemplateProvider.prototype.dummyData = [];

TemplateProvider.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

TemplateProvider.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

TemplateProvider.prototype.save = function(templates, callback) {
  var template = null;

  if( typeof(templates.length)=="undefined")
    templates = [templates];

  for( var i =0;i< templates.length;i++ ) {
    template = templates[i];
    template._id = templateCounter++;
    template.created_at = new Date();

    if( template.steps === undefined )
      template.steps = [];

    for(var j =0;j< template.steps.length; j++) {
      template.steps[j].created_at = new Date();
    }
    this.dummyData[this.dummyData.length]= template;
  }
  callback(null, templates);
};

/* Lets bootstrap with dummy data */
new TemplateProvider().save([
  {name: 'Template one', key: 'template_one', steps:[new Step({description:'I love it'}), new Step({description:'This is rubbish!'})]},
  {name: 'Template two', key: 'template_two'},
  {name: 'Template three', key: 'template_three'}
], function(error, templates){});

exports.TemplateProvider = TemplateProvider;