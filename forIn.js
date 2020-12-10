const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const object = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    j: 8,
    i: 9,
};

// add tests
suite
    .add('for Object.keys', function () {
        const keys = Object.keys(object);

        let sum = 0;

        for (i = 0; i < keys.length; i++) {
            sum += object[keys[i]];
        }
    })
    .add('for in', function () {
        let sum = 0;

        for (let key in object) {
            sum += object[key];
        }
    })
    .on('cycle', function (event) {
        console.log('cycle', String(event.target));
    })
    .on('complete', function () {
        console.log('complete', 'Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
