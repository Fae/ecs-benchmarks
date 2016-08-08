'use strict';

var Benchmark = require('benchmark'),
    purtyBench = require('beautify-benchmark');

var common = module.exports = {
    suite: function (name) {
        return new Benchmark.Suite(name, common.options());
    },

    options: function () {
        return {
            'maxTime': 3,
            'onStart': onStart,
            'onCycle': onCycle,
            'onAbort': onAbort,
            'onError': onError,
            'onReset': onReset,
            'onComplete': onComplete
        };
    },

    runOptions: function () {
        return {
            async: false
        };
    },

    test: function (name, setup, test) {
        return {
            name: name,
            setup: setup,
            fn: test
        };
    },

    // libs
    Ash:    require('../lib/ash'),
    makr:   require('makr'),
    tecs:   require('tiny-ecs'),
    yagl:   require('../lib/yagl/ecs'),
};

// called when the suite starts running
function onStart(event) {
    console.log('Starting Suite: ' + event.currentTarget.name);
}

// called between running benchmarks
function onCycle(event) {
    purtyBench.add(event.target);
}

// called when aborted
function onAbort() {}

// called when a test errors
function onError(event) {
    console.log(event.target.error.stack || event.target.error);
}

// called when reset
function onReset() {}

// called when the suite completes running
function onComplete() {
    purtyBench.log();
}
