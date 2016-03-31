import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveComment() {
      console.log('new-comment');
      var params = {
        commentText: this.get('commentText'),
        blog: this.get('blog')
      };
      this.sendAction('saveComment', params);
      this.set('commentText', '');
    }
  }
});
