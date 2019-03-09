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
    count: 100,
    person: {
        maleness: 0.5
    }
};

// create a cohort

var cohort = Cohort.Create(config);

// get initial stats
var statsReadable = cohort.GetReadableStats();

console.log(statsReadable);
