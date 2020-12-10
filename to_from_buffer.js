const Benchmark = require('benchmark');
const v8 = require('v8');

const suite = new Benchmark.Suite;

const string = 'yNcATZFve7AJZrn7DxopLOFLrS5uujaRZHoSwi9SbvmJGfDryVHwawWacD76m9LcTkIlCmM1WOnfWHLbUJ6b22eNvVjRoDLISuYs'

let buffer1;
let buffer2;

// add tests
suite
    .add('Buffer.from', function () {
        buffer1 = Buffer.from(string, 'utf8');
    })
    .add('v8.serialize', function () {
        buffer2 = v8.serialize(string)
    })
    .add('Buffer.from', function () {
        buffer1.toString();
    })
    .add('v8.serialize', function () {
        v8.deserialize(buffer2);
    })
    .on('cycle', function (event) {
        console.log('cycle', String(event.target));
    })
    .on('complete', function () {
        console.log('complete', 'Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
