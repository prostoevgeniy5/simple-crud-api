const {persons} = require('./db.js');
const { v4 } = require('uuid');

function deletePersonFromList(persons, personId) {  
    let newPersons = persons.filter((el, ind) => {
            return el["id"] != personId;
        })
    return newPersons;
}

function updatePersonForList(request, body) {
    let bodyData = body;
    let newPersons;
    let personId = getPersonId(request.url);
    let definPerson = persons.find((el, ind) => {
            return el["id"] === personId;
        })        
    let newObj = JSON.parse(bodyData);
    let resultObj = Object.assign(definPerson, newObj);
    newPersons = persons.map((el, ind) => {
        if(el["id"] == personId.toString()) {
            return resultObj;
        } else {
            return el;
        }
    })
    return JSON.stringify(newPersons);
 }


function createNewPersonForList(persons, data) {
    let obj = JSON.parse(data)
    obj["id"] = v4();
    persons.push(obj);
    return JSON.stringify(persons);
}

function getAllPersonsFromList(persons) {
    const resultPersons = JSON.stringify(persons);
    return resultPersons;
}

function getPersonFromList(persons, personId) {
    const definPerson = persons.find((el, ind) => {
        return el["id"] === personId;
    })
    return definPerson;
}

function getPersonId(urlstr) {
    let result = urlstr.split('/')[2].replace('$%7B', '').replace('%7D', '');
    return result;
}

module.exports = {getPersonId, deletePersonFromList, updatePersonForList, createNewPersonForList, getAllPersonsFromList, getPersonFromList};