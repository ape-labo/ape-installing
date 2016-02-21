/**
 * Test case for unlessGlobal.
 * Runs with mocha.
 */
"use strict";

const unlessGlobal = require('../lib/unless_global.js'),
    assert = require('assert'),
    injectmock = require('injectmock');

describe('unlessGlobal', () => {
    before((done) => {
        done();
    });

    after((done)  => {
        injectmock.restoreAll();
        done();
    });

    it('Unless global', (done) => {
        injectmock(unlessGlobal, 'npm', (args, callback) => {
            callback(null);
        });
        unlessGlobal('foo', {}, (err) => {
            assert.ifError(err);
            done();
        });
    });
});

