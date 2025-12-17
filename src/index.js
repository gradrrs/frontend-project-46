import parseFile from './parser.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  try {
    const data1 = parseFile(filepath1);
    const data2 = parseFile(filepath2);
    
    return `Comparing files:
File 1 (${filepath1}): ${Object.keys(data1).length} properties
File 2 (${filepath2}): ${Object.keys(data2).length} properties
Format: ${format}

Data from file1: ${JSON.stringify(data1, null, 2)}
Data from file2: ${JSON.stringify(data2, null, 2)}`;
    
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

export default genDiff;