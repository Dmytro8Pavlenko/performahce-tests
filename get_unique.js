const { indexOf } = require('benchmark');
const Benchmark = require('benchmark');

const suite = new Benchmark.Suite;

const arrayOfNumbers = [515, 515, 515, 515, 515, 654, 654, 732, 666, 62, 762, 314, 922, 254, 98, 75, 120, 580, 920, 623, 695, 369, 281, 233, 173, 650, 250, 271, 40, 700, 107, 745, 168, 740, 554, 758, 101, 108, 309, 131, 105, 317, 721, 992, 763, 362, 280, 278, 558, 699, 339, 344, 845, 524, 302, 134, 134, 176, 792, 184, 643, 329, 906, 265, 609, 237, 937, 296, 41, 785, 981, 969, 592, 335, 28, 12, 662, 192, 102, 82, 5, 146, 157, 397, 767, 523, 324, 567, 915, 208, 837, 239, 888, 455, 711, 468, 358, 909, 475, 860, 275, 389, 656, 986, 30, 247];

// add tests
suite
    .add('forAndIndexOf', function () {
        const arrayOfUniqueNumbers = [];

        for (let i = 0; i < arrayOfNumbers.length; i++) {
            if (arrayOfUniqueNumbers.indexOf(arrayOfNumbers[i]) === -1) {
                arrayOfUniqueNumbers.push(arrayOfNumbers[i]);
            }
        }
    })
    .add('setDestructuring', function () {
        const arrayOfUniqueNumbers = [...(new Set(arrayOfNumbers))];
    })
    .on('cycle', function (event) {
        console.log('cycle', String(event.target));
    })
    .on('complete', function () {
        console.log('complete', 'Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': true });
