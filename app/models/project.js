var Project = Em.Model.extend({
  name: Em.attr()
})
export default Project;

Project.url = "/projects";
Project.adapter = Ember.RESTAdapter.create();
