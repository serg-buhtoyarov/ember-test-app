import Model, { attr, belongsTo } from '@ember-data/model';

export default class ActorModel extends Model {
  @attr firstName;
  @attr secondName;
  @attr('date') birthday;
  @attr('number') staringCount;
  @belongsTo movie;
}
