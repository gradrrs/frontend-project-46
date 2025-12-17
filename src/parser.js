import fs from 'fs';
import path from 'path';

const parseFile = (filePath) => {
  const absolutePath = path.resolve(process.cwd(), filePath);
  const rawData = fs.readFileSync(absolutePath, 'utf-8');
  const ext = path.extname(filePath).toLowerCase();

  switch (ext) {
    case '.json':
      return JSON.parse(rawData);
    default:
      throw new Error(`Unsupported file extension: ${ext}`);
  }
};

export default parseFile;
