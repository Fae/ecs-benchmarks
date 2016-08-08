'use strict';

module.exports = {
    common: require('./common'),
    shared: require('./lib/shared'),
    ash:    require('./lib/ash'),
    makr:   require('./lib/makr'),
    tecs:   require('./lib/tiny-ecs'),
    yagl:   require('./lib/yagl-ecs'),
};

global.f = module.exports;
global.c = module.exports.common;
