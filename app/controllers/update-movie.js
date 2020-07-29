import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class UpdateMovieController extends Controller {
  @action
  updateMovie() {
    this.transitionToRoute('movies');
  }
}
