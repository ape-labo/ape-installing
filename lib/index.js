/**
 * ape framework module for installing modules.
 * @module ape-installing
 */

"use strict";

module.exports = {
    get done() { return require('./done'); },
    get unlessGlobal() { return require('./unless_global'); }
};