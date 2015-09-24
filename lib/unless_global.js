/**
 * Install module unless global exists.
 * @function unlessGlobal
 * @param {string} name - Name to install
 * @param {object} [options] - Optional settings.
 * @param {string} [options.cwd=process.cwd()] - Working directory path.
 * @param {string} [options.bin=name] - Name of bin.
 * @param {boolean} [options.save=false] - Save to package.json
 * @param {boolean} [options.saveDev=false] - Save as dev to package.json
 * @param {boolean} [options.global=false] - Save as global module.
 * @param {boolean} [options.exit] - Exit when done.
 * @param {function} callback - Callback when done.
 */

"use strict";

var argx = require('argx'),
    hasbin = require('hasbin'),
    done = require('./done'),
    execcli = require('execcli');

/** @lends unlessGlobal */
function unlessGlobal(name, options, callback) {
    var args = argx(arguments);
    callback = args.pop('function');
    options = args.pop('object');
    name = args.shift('string');

    var bin = options.bin || name;
    hasbin(bin, function (has) {
        if (has) {
            return;
        }
        unlessGlobal.npm(['install', 'name', {
            save: options.save,
            saveDev: options.saveDev,
            global: options.global
        }], function (err) {
            if (options.exit) {
                done(err);
            } else {
                callback(err);
            }
        });
    });
}

unlessGlobal.npm = function (args, callback) {
    execcli('npm', args, callback);
};


module.exports = unlessGlobal;