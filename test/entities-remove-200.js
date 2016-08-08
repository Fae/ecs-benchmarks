require('./fixtures');

c.suite('Create 200 entities, then remove them all.')
    .add(c.test('Ash',
        function (event) {
            var entities = new Array(200);
            var world = new c.Ash.Engine();

            world.addSystem(new f.ash.MovementSystem(), 0);
            world.addSystem(new f.ash.CollisionSystem(), 1);
            world.addSystem(new f.ash.RenderingSystem(), 2);
        },
        function () {
            var i = 200;
            while (i--) {
                var entity = entities[i] = new c.Ash.Entity();

                entity.add(new f.shared.Position());
                entity.add(new f.shared.Motion());
                entity.add(new f.shared.Body());
                entity.add(new f.shared.Display());

                world.addEntity(entity);
            }

            i = 200;
            while (i--) {
                world.removeEntity(entities[i]);
            }
        }
    ))
    .add(c.test('makr',
        function (event) {
            var entities = new Array(200);
            var world = new f.makr.createWorld();
        },
        function () {
            var i = 200;
            while (i--) {
                var entity = entities[i] = world.create();

                entity.add(new f.shared.Position());
                entity.add(new f.shared.Motion());
                entity.add(new f.shared.Body());
                entity.add(new f.shared.Display());
            }

            i = 200;
            while (i--) {
                entities[i].destroy();
            }
        }
    ))
    // For some reason this throws....hmmmm...
    .add(c.test('tiny-ecs',
        function (event) {
            var entities = new Array(200);
            var world = new c.tecs.EntityManager();
        },
        function () {
            var i = 200;
            while (i--) {
                var entity = entities[i] = world.createEntity();

                world.entityAddComponent(entity, f.shared.Position);
                world.entityAddComponent(entity, f.shared.Motion);
                world.entityAddComponent(entity, f.shared.Body);
                world.entityAddComponent(entity, f.shared.Display);
            }

            i = 200;
            while (i--) {
                world.removeEntity(entities[i]);
            }
        }
    ))
    .add(c.test('yagl-ecs',
        function (event) {
            var entities = new Array(200);
            var world = new c.yagl();

            world.addSystem(new f.yagl.MovementSystem());
            world.addSystem(new f.yagl.CollisionSystem());
            world.addSystem(new f.yagl.RenderingSystem());
        },
        function () {
            var i = 200;
            while (i--) {
                var entity = entities[i] = new c.yagl.Entity(null, [
                    f.yagl.Position,
                    f.yagl.Motion,
                    f.yagl.Body,
                    f.yagl.Display,
                ]);
                world.addEntity(entity);
            }

            i = 200;
            while (i--) {
                world.removeEntity(entities[i]);
            }
        }
    ))
    .run(c.runOptions());
