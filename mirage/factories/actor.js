import { Factory } from 'ember-cli-mirage';
import faker from "faker";

export default Factory.extend({
  firstName() {
    return faker.name.firstName();
  },

  secondName() {
    return faker.name.lastName();
  },

  staringCount() {
    return faker.random.number();
  },

  birthday() {
    return faker.date.past();
  }
});
