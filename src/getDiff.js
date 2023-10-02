import _ from 'lodash';
import obj1 from './file1.json';
import obj2 from './file2.json';

const getDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = _.union(keys1, keys2).sort();
  let result = '';
  for (let key of keys) {
    if (!Object.hasOwn(obj1, key)) {
      result = `${result}\n+ ${key}: ${obj2[key]}`;
    } else if (!Object.hasOwn(obj2, key)) {
      result = `${result}\n- ${key}: ${obj1[key]}`;
    } else if (obj1[key] !== obj2[key]) {
      result = `${result}\n- ${key}: ${obj1[key]}\n+ ${key}: ${obj2[key]}`;
    } else {
      result = `${result}\n  ${key}: ${obj2[key]}`;
    }
  }
  return result;
}

export default getDiff;