#!/usr/bin/env node

import { program } from 'commander';
import getDiff from '../src/getDiff.js';

program
  .name('gendiff')
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format <type>', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    console.log(getDiff(filepath1, filepath2));
  })

program.parse();