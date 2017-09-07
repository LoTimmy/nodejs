const _ = require('underscore');
const s = require("underscore.string");
_.mixin(s.exports());

console.log(_.toSentence(['jQuery', 'Mootools', 'Prototype']));

