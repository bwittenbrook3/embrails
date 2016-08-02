import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('posts', {path: "/"}, function() {
    this.route('hello-world');
    this.route('smoldering-coals');
    this.route('semantic-styles');
  });
});

export default Router;
