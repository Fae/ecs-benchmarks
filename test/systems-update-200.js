require('./fixtures');

c.suite('Update 200 entities registered across 3 systems')
    .add(c.test('Ash',
        function (event) {
            var entities = new Array(200);
            var world = new c.Ash.Engine();

            world.addSystem(new f.ash.MovementSystem(), 0);
            world.addSystem(new f.ash.CollisionSystem(), 1);
            world.addSystem(new f.ash.RenderingSystem(), 2);

            var i = 200;
            while (i--) {
                var entity = entities[i] = new c.Ash.Entity();

                entity.add(new f.shared.Position());
                entity.add(new f.shared.Motion());
                entity.add(new f.shared.Body());
                entity.add(new f.shared.Display());

                world.addEntity(entity);
            }
        },
        function () {
            world.update();
        }
    ))
    .add(c.test('makr',
        function (event) {
            var entities = new Array(200);
            var world = new f.makr.createWorld();

            var i = 200;
            while (i--) {
                var entity = entities[i] = world.create();

                entity.add(new f.shared.Position());
                entity.add(new f.shared.Motion());
                entity.add(new f.shared.Body());
                entity.add(new f.shared.Display());
            }
        },
        function () {
            f.makr.MovementSystem(world);
            f.makr.CollisionSystem(world);
            f.makr.RenderingSystem(world);
        }
    ))
    .add(c.test('tiny-ecs',
        function (event) {
            var entities = new Array(200);
            var world = new c.tecs.EntityManager();

            var i = 200;
            while (i--) {
                var entity = entities[i] = world.createEntity();

                world.entityAddComponent(entity, f.shared.Position);
                world.entityAddComponent(entity, f.shared.Motion);
                world.entityAddComponent(entity, f.shared.Body);
                world.entityAddComponent(entity, f.shared.Display);
            }

            var moveSys = new f.tecs.MovementSystem(world),
                collSys = new f.tecs.CollisionSystem(world),
                rendSys = new f.tecs.RenderingSystem(world);
        },
        function () {
            moveSys.update();
            collSys.update();
            rendSys.update();
        }
    ))
    .add(c.test('yagl-ecs',
        function (event) {
            var entities = new Array(200);
            var world = new c.yagl();

            world.addSystem(new f.yagl.MovementSystem());
            world.addSystem(new f.yagl.CollisionSystem());
            world.addSystem(new f.yagl.RenderingSystem());

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
        },
        function () {
            world.update();
        }
    ))
    .run(c.runOptions());
