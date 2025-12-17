import parseFile from './parser.js';
import formatDiff from './formatters/stylish.js';

const getSortedKeys = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const allKeys = [...new Set([...keys1, ...keys2])];
  return allKeys.sort();
};

const buildDiff = (data1, data2) => {
  const sortedKeys = getSortedKeys(data1, data2);
  return sortedKeys.map((key) => {
    const val1 = data1[key];
    const val2 = data2[key];
    const has1 = Object.hasOwn(data1, key);
    const has2 = Object.hasOwn(data2, key);

    if (has1 && !has2) {
      return { key, status: 'removed', value: val1 };
    }
    if (!has1 && has2) {
      return { key, status: 'added', value: val2 };
    }
    if (val1 === val2) {
      return { key, status: 'unchanged', value: val1 };
    }

    return [
      { key, status: 'removed', value: val1 },
      { key, status: 'added', value: val2 },
    ];
  }).flat();
};

const genDiff = (filePath1, filePath2, format = 'stylish') => {
  const data1 = parseFile(filePath1);
  const data2 = parseFile(filePath2);
  const diff = buildDiff(data1, data2);
  return formatDiff(diff);
};

export default genDiff;
