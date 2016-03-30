import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteMe(blog) {
      this.sendAction("deleteMe", blog);
    },
    updateMe(blog) {
      this.sendAction("updateMe", blog);
    }
  }
});
