import formStylish from './stylish.js';
import formPlain from './plain.js';
import formJson from './json.js';

const formatData = (data, format) => {
  switch (format) {
    case 'stylish':
      return formStylish(data);
    case 'plain':
      return formPlain(data);
    case 'json':
      return formJson(data);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default formatData;
