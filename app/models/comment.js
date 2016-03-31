import DS from 'ember-data';

export default DS.Model.extend({
  commentText: DS.attr(),
  blog: DS.belongsTo('blog', {async:true}),
});
