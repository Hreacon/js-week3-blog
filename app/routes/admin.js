import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveeNewBlog(params) {
      console.log('admin saveNewBlog');
      this.store.createRecord("blog", params).save();
    }
  }
});
