#!/usr/bin/env node
import { Command } from 'commander';
import pageLoader from '../src/index.js';

const program = new Command();

program
  .version('0.1.0')
  .arguments('<url>')
  .description('Page loader utility')
  .action(
    (url) => console.log(pageLoader(url)),
  )
  .helpOption('-h, --help', 'display help for  command')
  .option('-o, --output [type]', 'output dir', '/home/user/current-dir')
  .parse(process.argv);