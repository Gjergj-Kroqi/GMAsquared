assert = chai.assert;

describe('Testing function checkGuess() function for GMAsquared', function () {

    it('Test 1: generateNum(0) returns >= 1 and <=10', function () {
        for (var i = 1; i <= 3000; i++) {
            result = generateNum(0);
            assert(result <= 10 && result >= 1);
        }
    });

    it('Test 2: generateNum(1) returns >= 1 and <=30', function () {
        for (var i = 1; i <= 3000; i++) {
            result = generateNum(1);
            assert(result <= 30 && result >= 1);
        }
    });

    it('Test 3: generateNum(2) returns >= 1 and <=50', function () {
        for (var i = 1; i < 3000; i++) {
            result = generateNum(2);
            assert(result <= 50 && result >= 1);
        }
    });

    it('Test 4: generateNum() returns a number data type', function () {
        assert.typeOf(generateNum(), 'number');
    });

});