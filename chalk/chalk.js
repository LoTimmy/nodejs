'use strict';

const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

