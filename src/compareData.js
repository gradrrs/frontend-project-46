import _ from 'lodash';

const compareData = (data1, data2) => {
  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);
  const output = sortedKeys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return { key, type: 'removed', value: data1[key] };
    }
    if (!Object.hasOwn(data1, key)) {
      return { key, type: 'added', value: data2[key] };
    }
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { key, type: 'nested', children: compareData(data1[key], data2[key]) };
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'changed',
        oldValue: data1[key],
        newValue: data2[key],
      };
    }
    return { key, type: 'unchanged', value: data1[key] };
  });
  return output;
};

export default compareData;
