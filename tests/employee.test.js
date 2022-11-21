const employee = require('../src/employee');

describe('Employee', () => {
    describe('Name', () => {
        it('should set the object name to a string', () => {
            // Positive test

            // Arrange
            const str = 'Yogi Bear';
            // Act
            const newEmployee = new Employee(str);
            // Assert
            expect(newEmployee.name).toEqual(str);
        });

        it('should return an error if string is undefined', () => {
            // Negative test

            // Arrange
            const cb = () => new Employee();
            const error = new Error(
                "Expected parameter 'text' to be a non-empty string."
            );
            // Assert
            expect(cb).toThrowError(error);
        })
    })

    describe('Position', () => {
        it('should set the object position to a string', () => {
            // Positive test

            // Arrange
            const str = "Manager";
            // Act
            const newEmployee = new Employee(str);
            // Assert
            expect(newEmployee.position).toEqual(str);
        });
        it('should throw an error if string is undefined', () => {
            // Negative test

            // Arrange
            const cb = () => new Employee();
            const error = new Error(
                "Expected parameter 'text' to be a non-empty string"
            );
            // Assert
            expect(cb).toThrowError(error);
        });
    })

    describe('')
});