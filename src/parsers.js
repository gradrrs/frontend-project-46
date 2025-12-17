import yaml from 'js-yaml';

const parse = (data, extension) => {
  const parsedData = extension === 'json' ? JSON.parse(data) : yaml.load(data);
  return parsedData;
};

export default parse;
