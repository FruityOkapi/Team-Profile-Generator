const employee = require('../lib/employee');
const intern = require('../lib/intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should make an object that has a school', () => {
            const school = 'University of Arizona';
            const newIntern = new intern.Intern('Luna', 42, 'test@test.com', school);
            expect(school).toEqual(newIntern.school);
        });
        it('should throw an error if no parameters are entered or if the entered parameter is a empty string',() => {
            const cb = () => new intern.Intern();
            const error = new Error("Expected parameter 'school' to be a non-empty string");
            expect(cb).toThrowError(error);
        })
    });

    describe('getSchool', () => {
        it('should return with the school of the employee', () => {
            const school = 'University of Arizona';
            const newIntern = new intern.Intern('Luna', 42, 'test@test.com', school);
            const gotSchool = newIntern.getSchool();
            expect(gotSchool).toEqual(newIntern.school);
        })
    });

    describe('getRole', () => {
        it('should return with the string Intern', () => {
            const newIntern = new intern.Intern('Luna', 1, 'test@test.com', 'U of L');
            const check = newIntern.getRole();
            expect(check).toEqual('Intern');
        })
    })
});