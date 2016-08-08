'use strict';

var makr = require('makr');
const shared = require('./shared');

function noop() {}

module.exports = {
    createWorld: function () {
        return c.makr(
            shared.Position,
            shared.Motion,
            shared.Display,
            shared.Body
        );
    },

    // Systems
    MovementSystem: function(em) {
        var entities = em.query(shared.Position, shared.Motion);

        for (var i = 0; i < entities.length; ++i) {
            noop();
        }
    },

    CollisionSystem: function(em) {
        var entities = em.query(shared.Position, shared.Motion, shared.Body);

        for (var i = 0; i < entities.length; ++i) {
            noop();
        }
    },

    RenderingSystem: function(em) {
        var entities = em.query(shared.Position, shared.Display);

        for (var i = 0; i < entities.length; ++i) {
            noop();
        }
    },
};
