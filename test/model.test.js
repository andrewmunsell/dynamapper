'use strict';

const assert = require('chai').assert;

const Model = require('@src/model');

describe('Model', function () {
    describe('.tableName', function () {
        it('should throw an error for the default table name implementation', function () {
            try {
                Model.tableName;

                assert.isTrue(false);
            } catch(e) {
                assert.instanceOf(e, Error);
            }
        });

        it('should throw an error for child classes that do not implement the getter', function () {
            class DummyModel {}

            try {
                DummyModel.tableName;

                assert.isTrue(false);
            } catch(e) {
                assert.instanceOf(e, Error);
            }
        });

        it('should not throw an error for child classes that implement the getter', function () {
            const TABLE_NAME = 'table';

            class DummyModel {
                static get tableName() {
                    return TABLE_NAME;
                }
            }

            assert.equal(TABLE_NAME, DummyModel.tableName);
        });
    });
});