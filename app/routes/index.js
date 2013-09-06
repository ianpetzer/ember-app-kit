import Project from 'appkit/models/project';

var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});

export default IndexRoute;
