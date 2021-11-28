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

    test('functions work with data', () => {
        let personId = "1";
        let objArray = [
            {
                "id": "0",
                "name": "Anka",
                "age": 25,
                "hobbies": ["pulemiot", "footbol", "tv"]},
            {
                "id": "1",
                "name": "Petika",
                "age": 30,
                "hobbies": ["pulemiotchitsa", "footbol", "pivo", "tv"],
            }
        ];

        let obj = {
            "id": "2",
            "name": "Georgiy",
            "age": "24",
            "hobbies": ["js","jest"]
        };

        let obj2 = {
            "id": "1",
            "age" : "20"
        };

        expect(deletePersonFromList(objArray, personId)).toEqual([{"id": "0", "name": "Anka", "age": 25, "hobbies": ["pulemiot", "footbol", "tv"]} ]);
        expect(getPersonId('/person/$%7B1%7D')).toBe("1");
        expect(getAllPersonsFromList([{"id":"1","name":"Vera"}])).toEqual('[{"id":"1","name":"Vera"}]');
        expect(getPersonFromList(objArray, "1")).toEqual( {
            "id": "1",
            "name": "Petika",
            "age": 30,
            "hobbies": ["pulemiotchitsa", "footbol", "pivo", "tv"],
        });
    })
})