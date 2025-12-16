#!/usr/bin/env node

import { Command } from 'commander';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .argument('<filepath1>', 'path to first file')
  .argument('<filepath2>', 'path to second file')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2, options) => {
    console.log(`Comparing ${filepath1} and ${filepath2}`);
    if (options.format) {
      console.log(`Format: ${options.format}`);
    }
    console.log('Difference will be shown here');
  });

program.parse();