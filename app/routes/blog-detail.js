import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },
  actions: {
    saveComment(params) {
      var newCom = this.store.createRecord('comment', params);
      var blog = params.blog;
      newCom.save().then(function() {
        return blog.save();
      });
      this.transitionTo('blog-detail', params.blog);
    }
  }
});
