const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(10, 20);
        
            expect(res).toBe(30, `Expected 30, but got ${res}.`).toBeA('number');
        });
        
        it('should async add two numbers', (done) => {
            utils.asyncAdd(4, 5, (sum) => {
                expect(sum).toBe(9).toBeA('number');
                done();
            });
        });
    });

    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(10);
        
            expect(res).toBe(100, `Expected 100, but got ${res}.`).toBeA('number');
        });
        
        it('should async square a number', (done) => {
            utils.asyncSquare(10, (squareValue) => {
                expect(squareValue).toBe(100, `Expected 100, but got ${squareValue}`).toBeA('number');
                done();
            });
        });
    });
});

it('should set first and last name', () => {
    var user = {
        location: 'Harrison',
        age: 43
    };

    user = utils.setName(user, 'Rajesh Thadhani');
    expect(user).toInclude({
        firstName: 'Rajesh',
        lastName: 'Thadhani'}).toBeA('object');
});

// it('should expect some value', () => {
    // expect(12).toNotBe(11);
    //expect({name: 'rajesh'}).toNotEqual({name: 'Rajesh'});
    //expect([2, 3, 4]).toExclude(1);
    // expect({
    //     name: 'Rajesh', 
    //     age: 43,
    //      location: 'Harrison'}).toInclude({
    //                                         age: 43
    //      });
// });
