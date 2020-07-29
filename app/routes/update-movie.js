import Route from '@ember/routing/route';

export default class UpdateMovieRoute extends Route {
  model(params) {
    return this.store.findRecord('movie', params.movie_id, { include: 'actors' });
  }
}
