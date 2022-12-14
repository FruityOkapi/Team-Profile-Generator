const employee = require('../lib/employee');
const engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should make an object that has a github', () => {
            const github = 'FruityOkapi';
            const newEngineer = new engineer.Engineer('Luna', 42, 'test@test.com', github);
            expect(github).toEqual(newEngineer.github);
        });
        it('should throw an error if no parameters are entered or if the entered parameter is a empty string',() => {
            const cb = () => new engineer.Engineer();
            const error = new Error("Expected parameter 'github' to be a non-empty string");
            expect(cb).toThrowError(error);
        })
    });

    describe('getGithub', () => {
        it('should return with the GitHub username.', () => {
            const html = '<a href="https://github.com/FruityOkapi">FruityOkapi</a>';
            const newEngineer = new engineer.Engineer('Luna', 3, 'test@test.com', 'FruityOkapi')
            const github = newEngineer.getGithub();
            expect(github).toEqual(html);
        })
    });

    describe('getRole', () => {
        it('should return with a string with html for the github', () => {
            const newEngineer = new engineer.Engineer('Luna', 1, 'test@test.com', 'MsBarksALot');
            const check = newEngineer.getRole();
            expect(check).toEqual('Engineer');
        })
    })
});