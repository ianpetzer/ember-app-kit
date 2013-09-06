import Project from 'appkit/models/project';

var IndexController = Ember.ArrayController.extend({

  project:  null,

  init: function() {
    var project = Project.create({name: 'bob'});
    this.set('project', project);
  },

  actions: {
    saveProject: function() {
      this.get('project').save();
    }
  }

});

export default IndexController;