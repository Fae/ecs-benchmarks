require('./fixtures');

c.suite('Create 200 entities and add 4 components, then remove all components')
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
                entities[i].remove(f.shared.Position);
                entities[i].remove(f.shared.Motion);
                entities[i].remove(f.shared.Body);
                entities[i].remove(f.shared.Display);
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
                entities[i].remove(f.shared.Position);
                entities[i].remove(f.shared.Motion);
                entities[i].remove(f.shared.Body);
                entities[i].remove(f.shared.Display);
            }
        }
    ))
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
                entity = entities[i];

                world.entityRemoveComponent(entity, f.shared.Position);
                world.entityRemoveComponent(entity, f.shared.Motion);
                world.entityRemoveComponent(entity, f.shared.Body);
                world.entityRemoveComponent(entity, f.shared.Display);
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
                entities[i].removeComponent('Position');
                entities[i].removeComponent('Motion');
                entities[i].removeComponent('Body');
                entities[i].removeComponent('Display');
            }
        }
    ))
    .run(c.runOptions());
