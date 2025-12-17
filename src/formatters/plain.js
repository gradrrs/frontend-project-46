import _ from 'lodash';

const formatValue = (value) => {
  if (_.isString(value)) {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }
  return value;
};

const formatPlain = (value, parent = '') => {
  const result = value
    .filter((entry) => entry.type !== 'unchanged')
    .map((entry) => {
      switch (entry.type) {
        case 'removed':
          return `Property '${parent}${entry.key}' was removed`;
        case 'added':
          return `Property '${parent}${entry.key}' was added with value: ${formatValue(
            entry.value,
          )}`;
        case 'changed':
          return `Property '${parent}${entry.key}' was updated. From ${formatValue(
            entry.oldValue,
          )} to ${formatValue(entry.newValue)}`;
        case 'nested':
          return formatPlain(entry.children, `${parent}${entry.key}.`);
        default:
          throw new Error(`Unknown entry type: '${entry.type}'!`);
      }
    });

  return result.join('\n');
};

export default formatPlain;
