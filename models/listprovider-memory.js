var listCounter = 1;

ListProvider = function(){};
ListProvider.prototype.dummyData = [];

ListProvider.prototype.findAll = function(callback) {
  callback( null, this.dummyData )
};

ListProvider.prototype.findById = function(id, callback) {
  var result = null;
  for(var i =0;i<this.dummyData.length;i++) {
    if( this.dummyData[i]._id == id ) {
      result = this.dummyData[i];
      break;
    }
  }
  callback(null, result);
};

ListProvider.prototype.save = function(lists, callback) {
  var list = null;

  if( typeof(lists.length)=="undefined")
    lists = [lists];

  for( var i =0;i< lists.length;i++ ) {
    list = lists[i];
    list._id = listCounter++;
    list.created_at = new Date();

    if( list.comments === undefined )
      list.comments = [];

    for(var j =0;j< list.comments.length; j++) {
      list.comments[j].created_at = new Date();
    }
    this.dummyData[this.dummyData.length]= list;
  }
  callback(null, lists);
};

/* Lets bootstrap with dummy data */
new ListProvider().save([
  {name: 'List one', templateKey: 'template_one', steps: [{}]},
  {name: 'List two', templateKey: 'template_one'},
  {name: 'List three', templateKey: 'template_one'}
], function(error, lists){});

exports.ListProvider = ListProvider;