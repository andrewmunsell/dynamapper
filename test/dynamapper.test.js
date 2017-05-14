'use strict';

const assert = require('chai').assert;

const DynaMapper = require('@src/dynamapper');

describe('DynaMapper', function () {
    describe('#constructor()', function () {
        it('should accept no parameters to create a DynaMapper with the default parameters', function () {
            const dynamapper = new DynaMapper();

            assert.isNotNull(dynamapper);
            assert.instanceOf(dynamapper, DynaMapper);
        });

        it('should accept an options object and return a new DynaMapper instance', function () {
            const dynamapper = new DynaMapper({});

            assert.isNotNull(dynamapper);
            assert.instanceOf(dynamapper, DynaMapper);
        });
    });
});