import path from 'path';
import fs from 'fs';
import compareData from './compareData.js';
import formatData from './formatters/index.js';
import parse from './parsers.js';

const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');

const genDiff = (path1, path2, format = 'stylish') => {
  const filepath1 = path.resolve(process.cwd(), path1);
  const filepath2 = path.resolve(process.cwd(), path2);
  const file1Extesion = path.extname(path1).slice(1);
  const file2Extesion = path.extname(path2).slice(1);
  const file1 = readFile(filepath1);
  const file2 = readFile(filepath2);
  const parsedFile1 = parse(file1, file1Extesion);
  const parsedFile2 = parse(file2, file2Extesion);
  const diff = compareData(parsedFile1, parsedFile2);
  return formatData(diff, format);
};

export default genDiff;
