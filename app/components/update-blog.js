import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateBlog(blog) {
      this.sendAction('updateBlog', blog);
    }
  }
});
