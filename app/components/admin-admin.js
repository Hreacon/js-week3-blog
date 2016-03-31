import Ember from 'ember';

export default Ember.Component.extend({
  selectedBlog: null,
  actions: {
    deleteMe(blog) {
      this.sendAction('deleteMe', blog);
    },
    updateMe(blog) {
      this.set('selectedBlog', blog);
    },
    updateBlog(blog) {
      this.sendAction('updateBlog', blog);
    }
  }
});
