import { helper } from '@ember/component/helper';

function include(params) {
  const [items, value] = params;
  return items.indexOf(value) > -1;
}

export default helper(include);
