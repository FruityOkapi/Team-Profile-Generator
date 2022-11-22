const employee = require('../lib/employee');
const manager = require('../lib/manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should make an object that has an name, id, email, office number', () => {
            const newManager = new manager.Manager('Luna', 42, 'test@test.com', 3);
            expect(newManager.officeNumber).toEqual(3);
            expect(newManager.name).toEqual('Luna');
            expect(newManager.id).toEqual(42);
            expect(newManager.email).toEqual('test@test.com');
        });
        it('should throw an error if no parameters are entered or if the entered parameter is a string',() => {
            const cb = () => new manager.Manager();
            const error = new Error("Expected parameter 'officeNumber' to be a non-negative number");
            expect(cb).toThrowError(error);
        })
    })
});