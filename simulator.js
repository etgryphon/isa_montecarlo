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
    count: 1,
    cohort: {
        count: 100,
        person: {
            maleness: 0.5
        },
        aspects: ['career'],
        career: {
            jobs: ['computer', 'health', 'engineering', 'math', 'business', 'social'],
            starting: 50219,
            social: {
                male: {
                    probability: 0.1,
                    starting: 46707
                },
                female: {
                    probability: 0.3,
                    starting: 46707
                }
            },
            health: {
                male: {
                    probability: 0.1,
                    starting: 53872
                },
                female: {
                    probability: 0.3,
                    starting: 53872
                }
            },
            computer: {
                male: {
                    probability: 0.3,
                    starting: 72677
                },
                female: {
                    probability: 0.1,
                    starting: 72677
                }
            },
            business: {
                male: {
                    probability: 0.2,
                    starting: 52456
                },
                female: {
                    probability: 0.1,
                    starting: 52456
                }
            },
            math: {
                male: {
                    probability: 0.2,
                    starting: 60631
                },
                female: {
                    probability: 0.1,
                    starting: 60631
                }
            },
            engineering: {
                male: {
                    probability: 0.1,
                    starting: 60631
                },
                female: {
                    probability: 0.1,
                    starting: 60631
                }
            }
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

