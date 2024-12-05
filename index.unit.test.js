const getSum = require('./index.js');

describe('getSum', () => {
    it('should return the sum of two numbers', () => {
        expect(getSum(1, 2)).toBe(3);
    });
});