/**
 * person.js - person object
 * module objects
 * @file objects/person.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

const appRoot   = require('app-root-path');
const _         = require('lodash');
// utils
const creator = require(appRoot + '/utils/creator');
// objects
const Person = require(appRoot + '/objects/person');

var Cohort = {
    Create: function(config){
        var cohort = creator.call(this);

        // Set interal values
        cohort._persons = {};
        for (var i = config.count - 1; i >= 0; i--) {
            var person = Person.Create(config.person);
            var id = person.GetId();
            cohort._persons[id] = person;
        }

        return cohort;
    },

    GetStats: function(){
        var stats = {}
        stats.persons = _.reduce(this._persons, function(sum, v, k){
            if (v.IsMale()){
                sum.males += 1;
            } else {
                sum.females += 1;
            }

            return sum;
        }, {males: 0, females: 0});

        // TODO: Other stats

        return stats;
    },

    GetReadableStats: function(){
        var stats = this.GetStats();
        var cohortStatString = "*** Cohort Stats ***";

        // output the gender
        cohortStatString += "\n\tPersons:";
        cohortStatString += "\n\t\tMales: " + stats.persons.males;
        cohortStatString += "\n\t\tFemales: " + stats.persons.females;

        // TODO: Output other stats

        // add the last return
        cohortStatString+="\n";

        return cohortStatString;
    }
};

module.exports = Cohort;
