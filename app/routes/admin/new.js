import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveNewBlog(params) {
      console.log('new saveNewBlog');
      this.store.createRecord("blog", params).save();
    }
  }
});
