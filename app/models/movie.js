import Model, { attr, hasMany } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr title;
  @attr description;
  @attr('date') publishedAt;
  @hasMany actors;
}
