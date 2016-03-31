import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteMe (blog){
      this.sendAction("deleteMe", blog);
    },
    updateMe (blog){
      console.log("tile");
      this.sendAction("updateMe", blog);
    }
  }
});
