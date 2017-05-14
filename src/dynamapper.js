'use strict';

const AWS = require('aws-sdk');

class DynaMapper {
    /**
     * Create a new DynaMapper instance with the specified options.
     * 
     * @param options {Object}
     */
    constructor(options = {}) {
        this.__options = {
            client: options.client || new AWS.DynamoDB.DocumentClient()
        }
    }
}

module.exports = DynaMapper;