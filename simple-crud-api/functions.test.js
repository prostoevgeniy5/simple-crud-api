const {getPersonId, deletePersonFromList, updatePersonForList, createNewPersonForList, getAllPersonsFromList, getPersonFromList} = require('./functions.js');

describe('Test of the functions', () => {
    test('Functions was defined', () => {
        expect(deletePersonFromList).toBeDefined();
        expect(getPersonId).toBeDefined();
        expect(updatePersonForList).toBeDefined();
        expect(createNewPersonForList).toBeDefined();
        expect(getAllPersonsFromList).toBeDefined();
        expect(getPersonFromList).toBeDefined();
    })
})