import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('hello-world');
  this.route('smoldering-coals');
});

export default Router;
