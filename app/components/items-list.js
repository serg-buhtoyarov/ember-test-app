import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ItemsListComponent extends Component {
  @action
  deleteItem(item) {
    if (confirm(`Are you sure, you want to delete ${item.title}`)) {
      item.destroyRecord().then(() => {
        alert('Deleted successfully!')
      }).catch(() => {
        alert('Error')
      })
    }
  }
}
