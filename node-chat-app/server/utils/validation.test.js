var expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should validate string', () => {
        
        var checkString = isRealString(123);
        expect(checkString).toBe(false);

        checkString = isRealString('   ');
        expect(checkString).toBe(false);

        checkString = isRealString('  My String');
        expect(checkString).toBe(true);
    });
});
