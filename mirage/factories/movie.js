import { Factory } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  title() {
    return faker.name.title();
  },

  description() {
    return faker.lorem.paragraph();
  },

  publishedAt() {
    return faker.date.past();
  },

  afterCreate(movie, server) {
    server.createList('actor', 5, { movie });
  }
});
