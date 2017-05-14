'use strict';

/**
 * Base class that all models should inherit from. Provides default functionality like the
 * ability to create new queries, as well as static method helpers to CRUD individual model
 * instances.
 */
class Model {
    static get tableName() {
        throw new Error('You must implement the table name getter for the model.');
    }
}

module.exports = Model;