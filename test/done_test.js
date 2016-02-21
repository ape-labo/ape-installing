/**
 * Test case for done.
 * Runs with mocha.
 */
"use strict";

const done = require('../lib/done.js'),
    assert = require('assert');

describe('done', () => {

    before((done) => {
        done();
    });

    after((done) => {
        done();
    });


    it('Done', (done) => {
        done();
    });
});

