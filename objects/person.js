/**
 * person.js - person object
 * module objects
 * @file objects/person.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

const appRoot = require('app-root-path');
// utils
const creator = require(appRoot + "/utils/creator");
// initializers
const personInit = require(appRoot + "/initializers/person_init");

// Documentation of the Person Configuration
// *****************************************
// {
//   maleness: 0.5
// }
// *****************************************


var Person = {
    Create: function(config){
        var person = creator.call(this);
        // TODO: set the internal values
        person._metadata = personInit(config);
        return person;
    },

    // Metadata functions
    GetId: function(){
        return this._metadata.guid;
    },

    IsMale: function(){
        return this._metadata.is_male;
    }
};

module.exports = Person;
