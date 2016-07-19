import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sandbox', { path: '/' }, function() {
    this.route('intro', { path: '/' });
    this.route('forms');
    this.route('typography');
    this.route('tables');
  });
});

export default Router;
