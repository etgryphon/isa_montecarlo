/**
 * career_init.js - career_init object
 * module initializers
 * @file initializers/career_init.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

const _                     = require('lodash');
const Random                = require("random-js").Random;
const MersenneTwister19937  = require("random-js").MersenneTwister19937;
const uuidV4 = require('uuid/v4');
const random = new Random(MersenneTwister19937.autoSeed());

module.exports = function(config, person){
    var data = person._career || {};
    // first, find the job
    var jobArray = _.clone(config.jobs);
    jobArray = random.shuffle(jobArray);
    var gotAJob = false;
    var gender = person.GetGender();
    var job, jobConfig = null;
    var overallProbability = 1.0;
    for (var i = jobArray.length - 1; i >= 0 && !gotAJob; i--) {
        job = jobArray[i];
        jobConfig = config[job][gender];
        var sampleProb = jobConfig.probability / overallProbability;
        gotAJob = random.bool(sampleProb);
        overallProbability -= jobConfig.probability;
    }

    if (!gotAJob){
        // console.log("Error in career placement");
        job = 'degree';
        jobConfig =  {
            starting: config.starting
        };
    }
    data.job = job;
    data.starting = jobConfig.starting;
    person._career = data;

    // Add functions on the person for career information
    person.GetStartingSalary = function(){
        return this._career.starting;
    };

    person.GetCareer = function(){
        return this._career.job;
    };

    return person;
};
