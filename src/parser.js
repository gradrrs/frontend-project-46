import fs from 'fs';
import path from 'path';

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath);
  
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  
  const extension = path.extname(filepath).toLowerCase();
  
  switch (extension) {
    case '.json':
      return JSON.parse(fileContent);

    default:
      throw new Error(`Unsupported file format: ${extension}`);
  }
};

export default parseFile;