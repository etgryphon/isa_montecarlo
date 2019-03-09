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

            // Add the aspects
            for (var j = config.aspects.length - 1; j >= 0; j--) {
                var aspect = config.aspects[j];
                person.InitAspect(aspect, config[aspect]);
            }
        }

        return cohort;
    },

    GetStats: function(aspects){
        var stats = {}
        stats.persons = _.reduce(this._persons, function(sum, v, k){
            if (v.IsMale()){
                sum.males += 1;
            } else {
                sum.females += 1;
            }

            return sum;
        }, {males: 0, females: 0});

        stats.careers = _.reduce(this._persons, function(sum, p, id){
            var gender = p.GetGender();
            var career = p.GetCareer();
            var starting = p.GetStartingSalary();
            var gStat = sum[gender] || {};

            gStat[career] = gStat[career] || {name: career, count: 0, salary: starting};
            gStat[career].count += 1;

            sum[gender] = gStat;
            return sum;
        }, {});

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
        cohortStatString += "\n\tCareers:";
        cohortStatString += "\n\t\tMales:";
        cohortStatString = _.reduce(stats.careers.male, function(sum, x, k){
            sum += "\n\t\t\tJob: " + k;
            sum += "\n\t\t\t\tCount: " + x.count;
            sum += "\n\t\t\t\tSalary: " + x.salary;
            return sum;
        }, cohortStatString);
        cohortStatString += "\n\t\tFemales:";
        cohortStatString = _.reduce(stats.careers.female, function(sum, x, k){
            sum += "\n\t\t\tJob: " + k;
            sum += "\n\t\t\t\tCount: " + x.count;
            sum += "\n\t\t\t\tSalary: " + x.salary;
            return sum;
        }, cohortStatString);

        // add the last return
        cohortStatString+="\n";

        return cohortStatString;
    }
};

module.exports = Cohort;
