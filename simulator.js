/**
 * simulator.js - simulator object
 * module simulator
 * @file simulator.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

const appRoot = require('app-root-path');

// objects
const Cohort = require(appRoot + '/objects/cohort');

// TESTING
var config = {
    count: 10,
    cohort: {
        count: 100,
        person: {
            maleness: 0.6
        }
    }
};
// END - Testing



for (var i = 0; i < config.count; i++) {
    // create a cohort
    var cohort = Cohort.Create(config.cohort);

    // get initial stats
    var statsReadable = cohort.GetReadableStats();

    console.log(`Cohort #${i+1}:`);
    console.log(statsReadable);
}

