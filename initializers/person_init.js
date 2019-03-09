/**
 * person_init.js - person_init object
 * module initializers
 * @file initializers/person_init.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

const Random                = require("random-js").Random;
const MersenneTwister19937  = require("random-js").MersenneTwister19937;
const uuidV4 = require('uuid/v4');
const random = new Random(MersenneTwister19937.autoSeed());

module.exports = function(config, data){
    data = data || {};
    data.guid = uuidV4();

    // first set gender
    data.is_male = random.bool(config.maleness);

    return data;
};
