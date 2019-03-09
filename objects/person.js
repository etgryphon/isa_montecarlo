/**
 * person.js - person object
 * module objects
 * @file objects/person.js
 * @author egrano
 * @copyright Copyright ©2019, Evin Grano & Contributors. All rights reserved.
 */

const appRoot       = require('app-root-path');
const uuidV4        = require('uuid/v4');
// utils
const creator       = require(appRoot + "/utils/creator");
// initializers
const personInit    = require(appRoot + "/initializers/person_init");
const ASPECTS = {
    career:     require(appRoot + "/initializers/career_init")
};

// Documentation of the Person Configuration
// *****************************************
// {
//   maleness: 0.5
// }
// *****************************************


var Person = {
    Create: function(config){
        var person = creator.call(this);
        person._guid = uuidV4();

        // Set human values
        person._metadata = personInit(config);
        // TODO: Add pregnancy
        // TODO: Add injury/sickness

        return person;
    },

    InitAspect: function(aspect, config){
        return ASPECTS[aspect](config, this);
    },

    // Metadata functions
    GetId: function(){
        return this._guid;
    },

    IsMale: function(){
        return this._metadata.is_male;
    },

    GetGender: function(){
        return this.IsMale() ? 'male' : 'female';
    }
};

module.exports = Person;
