const employee = require('../lib/employee');
const manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should make an object that has an office number', () => {
            const newManager = new manager.Manager(3);
            expect(newManager.officeNumber).toEqual(3);
        });
        it('should throw an error if no parameters are entered or if the entered parameter is a string',() => {

        })
    })
})