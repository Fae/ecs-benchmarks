require('./fixtures');

c.suite('Create 1 Entity')
    .add(c.test('Ash',
        function (event) {
            var world = new c.Ash.Engine();
        },
        function () {
            world.addEntity(new c.Ash.Entity());
        }
    ))
    .add(c.test('makr (empty entity pool)',
        function (event) {
            var world = new f.makr.createWorld();
        },
        function () {
            world.create();
        }
    ))
    .add(c.test('makr (full entity pool)',
        function (event) {
            var world = new f.makr.createWorld();

            world.create().destroy();
        },
        function () {
            world.create();
        }
    ))
    .add(c.test('tiny-ecs',
        function (event) {
            var world = new c.tecs.EntityManager();
        },
        function () {
            world.createEntity();
        }
    ))
    .add(c.test('yagl-ecs',
        function (event) {
            var world = new c.yagl();
        },
        function () {
            var e = new c.yagl.Entity();
            world.addEntity(e);
        }
    ))
    .run(c.runOptions());
