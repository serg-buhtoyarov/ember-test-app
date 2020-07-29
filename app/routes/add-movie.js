import Route from '@ember/routing/route';

export default class AddMovieRoute extends Route {
  model() {
    return this.store.findAll('actor');
  }
}
