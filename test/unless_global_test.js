/**
 * Test case for unlessGlobal.
 * Runs with nodeunit.
 */

var unlessGlobal = require('../lib/unless_global.js'),
    injectmock = require('injectmock');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    injectmock.restoreAll();
    done();
};

exports['Unless global'] = function (test) {
    injectmock(unlessGlobal, 'npm', function (args, callback) {
        callback(null);
    });
    unlessGlobal('foo', {}, function (err) {
        test.ifError(err);
        test.done();
    });
};

