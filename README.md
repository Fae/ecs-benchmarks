# Benchmarks of ECS Frameworks

Currently these benchmarks run against:

- [Ash.js][ash]
- [makr][makr]
- [tiny-ecs][tecs]
- [yagl-ecs][yagl]

I had also considered, but eventually removed:

- [js-entity-components][ecs]
 * This was removed because it was just too feature-lite, and looks dead
- [ces][ces]
 * I had to remove this because all my benchmarks caused OOM errors, didn't bode well.
- [ent-comp][ent-comp]
 * Removed because it uses a 1-to-1 mapping of components to systems.

## Usage

To run the tests, just install dependencies and start:

```
npm i && npm start
```

<!-- URLs -->
[ash]: https://github.com/brejep/ash-js
[makr]: https://github.com/makrjs/makr
[tecs]: https://github.com/bvalosek/tiny-ecs
[yagl]: https://github.com/yagl/ecs
[ent-comp]: https://github.com/andyhall/ent-comp

[ecs]: https://github.com/rolandpoulter/js-entity-components
[ces]: https://github.com/qiao/ces.js
