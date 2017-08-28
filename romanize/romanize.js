'use strict';

const romanize = require('romanize-names');
const log = console.log;

log(romanize('張懸'));
log(romanize('張懸', 'MPS-II'));
log(romanize('張懸', 'HANYU'));

log(romanize('秋木安'));
log(romanize('秋木安', 'MPS-II'));
log(romanize('秋木安', 'HANYU'));

log(romanize('范姜峻宏'));
log(romanize('范姜峻宏', 'MPS-II'));
log(romanize('范姜峻宏', 'HANYU'));

