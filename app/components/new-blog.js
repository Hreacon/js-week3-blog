import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveNewBlog() {
      var params = {
        title: this.get('title'),
        body: this.get("body"),
        date: new Date()
      };
      this.set('title', '');
      this.set('body', '');
      console.log("saveNewBlog, new-blog", params);
      this.sendAction('saveNewBlog', params);
    }
  }
});
