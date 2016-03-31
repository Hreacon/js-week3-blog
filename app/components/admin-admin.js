import Ember from 'ember';

export default Ember.Component.extend({
  selectedBlog: null,
  actions: {
    deleteMe(blog) {
      this.sendAction('deleteMe', blog);
    },
    updateMe(blog) {
      console.log("admin-admin");
      if(this.selectedBlog !== null) {
        this.sendAction('updateBlog', this.selectedBlog);
      }
      this.set('selectedBlog', blog);
    },
    updateBlog(blog) {
      this.set('selectedBlog', null);
      this.sendAction('updateBlog', blog);
    }
  }
});
