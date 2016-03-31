import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('admin', function() {
    this.route('new');
  });
  this.route('blog-detail', {path: "/blog/:blog_id"});
});

export default Router;
