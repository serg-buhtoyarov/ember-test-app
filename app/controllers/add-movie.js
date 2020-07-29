import Controller from '@ember/controller';
import { tracked } from "@glimmer/tracking";
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class AddMovieController extends Controller {
  @tracked title;
  @tracked description;
  @tracked actors;
  @tracked selectedActorsIds = [];

  @computed('selectedActorsIds')
  get selectedActors() {
    const selectedActorsArr = [];
    this.model.forEach((item) => {
      if (this.selectedActorsIds.includes(item.id)) {
        selectedActorsArr.push(item);
      }
    });
    return selectedActorsArr;
  }

  @action
  addMovie() {
    const movie = this.store.createRecord('movie', {
      title: this.title,
      description: this.description,
      publishedAt: new Date(),
      actors: this.selectedActors
    });
    movie.save();
    this.title = "";
    this.description = "";
    this.selectedActorsIds = [];
    this.transitionToRoute('movies');
  }

  @action
  selectActor(event) {
    const selectedActorsIds = Array.from(event.target.querySelectorAll("option:checked"), e => e.value);
    this.set('selectedActorsIds', selectedActorsIds || []);
  }
}
