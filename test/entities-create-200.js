require('./fixtures');

c.suite('Create 200 Entities')
    .add(c.test('Ash',
        function (event) {
            var world = new c.Ash.Engine();
        },
        function () {
            var i = 200;
            while (i--) {
                world.addEntity(new c.Ash.Entity());
            }
        }
    ))
    .add(c.test('makr (empty entity pool)',
        function (event) {
            var world = new f.makr.createWorld();
        },
        function () {
            var i = 200;
            while (i--) {
                world.create();
            }
        }
    ))
    .add(c.test('makr (full entity pool)',
        function (event) {
            var world = new f.makr.createWorld();

            var i = 200;
            while (i--) {
                world.create().destroy();
            }
        },
        function () {
            i = 200;
            while (i--) {
                world.create();
            }
        }
    ))
    .add(c.test('tiny-ecs',
        function (event) {
            var world = new c.tecs.EntityManager();
        },
        function () {
            var i = 200;
            while (i--) {
                world.createEntity();
            }
        }
    ))
    .add(c.test('yagl-ecs',
        function (event) {
            var world = new c.yagl();
        },
        function () {
            var i = 200;
            while (i--) {
                var e = new c.yagl.Entity();
                world.addEntity(e);
            }
        }
    ))
    .run(c.runOptions());
