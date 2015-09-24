/**
 * Test case for done.
 * Runs with nodeunit.
 */

var done = require('../lib/done.js');

exports.setUp = function(done) {
    done();
};

exports.tearDown = function(done) {
    done();
};

exports['Done'] = function(test){

    test.done();
};

