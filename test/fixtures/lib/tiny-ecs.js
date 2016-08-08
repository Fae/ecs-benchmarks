'use strict';

const tecs = require('tiny-ecs');
const shared = require('./shared');

function noop() {}

module.exports = {
    // Component types
    Position:   shared.Position,
    Motion:     shared.Motion,
    Display:    shared.Display,
    Body:       shared.Body,

    // Systems
    MovementSystem: (function() {
        function MovementSystem(entities) {
            this.entities = entities;
        }

        MovementSystem.prototype.update = function(dt, time) {
            var toUpdate = this.entities.queryComponents([shared.Position, shared.Motion]);

            for (var i = 0, il = toUpdate.length; i < il; ++i) {
                noop();
            }
        };

        return MovementSystem;
    })(),

    CollisionSystem: (function() {
        function CollisionSystem(entities) {
            this.entities = entities;
        }

        CollisionSystem.prototype.update = function(dt, time) {
            var toUpdate = this.entities.queryComponents([shared.Position, shared.Motion, shared.Body]);

            for (var i = 0, il = toUpdate.length; i < il; ++i) {
                noop();
            }
        };

        return CollisionSystem;
    })(),
    RenderingSystem: (function() {
        function RenderingSystem(entities) {
            this.entities = entities;
        }

        RenderingSystem.prototype.update = function(dt, time) {
            var toUpdate = this.entities.queryComponents([shared.Position, shared.Display]);

            for (var i = 0, il = toUpdate.length; i < il; ++i) {
                noop();
            }
        };

        return RenderingSystem;
    })(),
};
