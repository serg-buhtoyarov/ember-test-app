import Route from '@ember/routing/route';

export default class MovieRoute extends Route {
  model(params) {
    return this.store.findRecord('movie', params.movie_id, { include: 'actors' });
  }
}
