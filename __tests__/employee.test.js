const employee = require('../lib/employee');

describe('Employee', () => {
    describe('Initialization',() => {
        it('should make an object that has a name, id, and email if given the proper parameters', () => {
            // Positive test

            // Arrange 
            const newEmployee = new employee.Employee('Luna', 4 , 'test@test.com');

            // Assert
            expect(newEmployee.name).toEqual('Luna');
            expect(newEmployee.id).toEqual(4);
            expect(newEmployee.email).toEqual('test@test.com');
        });
        it('should throw an error if provided no arguments',() => {
            // Negative test
            const cb = () => new employee.Employee();
            expect(cb).toThrowError();
        });
        it('should throw an error if name is not a string', () => {
            const cb = () => new employee.Employee(22, 'test@test.com')
            const error = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
            expect(cb).toThrowError(error);
        });
        it('should throw an error if an id is not entered', () => {
            const cb = () => new employee.Employee('Luna');
            const error = new Error("Expected parameter 'id' to be a non-negative number");
            expect(cb).toThrowError(error);
        });
        it('should throw an error if an email is not entered', () => {
            const cb = () => new employee.Employee('Luna', 4);
            const error = new Error("Expected parameter 'email' to be a non-empty string")
            expect(cb).toThrowError(error);
        })
    });

    describe('getName', () => {
        it('should return the name of the employee obj', () => {
            const newEmployee = new employee.Employee('Luna', 4, 'test@test.com');
            let name = newEmployee.getName();
            expect(name).toEqual(newEmployee.name);
        });
    });
    
    describe('getId', () => {
        it('should return the id of the employee', () => {
            const newEmployee = new employee.Employee('Luna', 4, 'test@test.com');
            let id = newEmployee.getId();
            expect(id).toEqual(newEmployee.id);
        })
    });

    describe('getEmail', () => {
        it('should return the email of the employee', () => {
            const newEmployee = new employee.Employee('Luna', 4, 'test@test.com');
            let email = newEmployee.getEmail();
            expect(email).toEqual(newEmployee.email);
        })
    });

    describe('getRole', () => {
        it('should return the role of the employee', () => {
            const newEmployee = new employee.Employee('Luna', 4, 'test@test.com');
            let role = newEmployee.getRole();
            expect(role).toEqual('Employee');
        })
    })
});