/**
 * @function done
 * @param {Error} err
 */
"use strict";

/** @lends done */
function done(err) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        process.exit(0);
    }
}

module.exports = done;
