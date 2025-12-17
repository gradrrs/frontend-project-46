import { test, expect } from '@jest/globals';
import path from 'path';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, 'fixtures', filename);

test('compare flat JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  
  const result = genDiff(file1, file2);
  
  expect(result).toContain('- follow: false');
  expect(result).toContain('host: hexlet.io');
  expect(result).toContain('- proxy: 123.234.53.22');
  expect(result).toContain('- timeout: 50');
  expect(result).toContain('+ timeout: 20');
  expect(result).toContain('+ verbose: true');
});

test('compare empty JSON files', () => {
  const emptyFile = getFixturePath('empty.json');
  const result = genDiff(emptyFile, emptyFile);
  
  expect(result).toBe('{\n\n}');
});