import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('blog');
  },
  actions: {
    deleteMe(blog) {
      if(confirm("Are you sure you wish to delete this entry?")) {
        blog.destroyRecord();
        this.transitionTo("admin");
      }
    },
    updateBlog(blog) {
      blog.save();
      this.transitionTo('admin');
    }
  }
});
