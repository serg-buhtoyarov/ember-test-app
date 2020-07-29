import EmberRouter from '@ember/routing/router';
import config from 'ember-test-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('movies');

  this.route('movie', {
    path: 'movies/:movie_id'
  });
  this.route('add-movie');

  this.route('update-movie', {
    path: 'update-movie/:movie_id'
  });
});
