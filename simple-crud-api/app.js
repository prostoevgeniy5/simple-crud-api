const http = require('http');
const { v4 } = require('uuid');
let {persons} = require('./db.js');
const { parse } = require('querystring');
const {getPersonId, deletePersonFromList, updatePersonForList, createNewPersonForList, getAllPersonsFromList, getPersonFromList} = require('./functions.js');

const PORT = process.env.PORT || 3333;

const server = http.createServer((request,response) => {
    console.log('server work');
    if(request.url.split('/')[1] === 'person') {
        switch(request.method) {
            case "PUT" :
                if(request.method === "PUT" && request.url.split('/').length > 2 && request.url.split('/')[2] != '') {
                    let result;
                    let body = '';
                    request.on('data', chunk => {
                        body += chunk.toString('utf-8');
                    });
                    request.on('error', (error) => {
                        console.log(error)
                    })
                    request.on('end', () => {
                        persons = JSON.parse(updatePersonForList(request, body));
                        result = JSON.stringify(persons);
                        response.end(result)
                    })
                        
                }    
            break;
            case "GET" :
                if (request.method == 'GET' && request.url.split('/').length === 2  || request.method == 'GET' && request.url.split('/').length > 2 && request.url.split('/')[2] === '') {
                    const resultPersons = getAllPersonsFromList(persons);
                    response.end(resultPersons);
                    } else if(request.method == 'GET' && request.url.split('/').length > 2 && request.url.split('/')[2] != '') {
                    let personId = getPersonId(request.url);
                    let definedPerson = getPersonFromList(persons, personId);          
                    request.on('error', (error) => {
                        console.log(error)
                    })
                    if(definedPerson) {
                        response.end(JSON.stringify(definedPerson));
                    } else {
                        console.log(`Person for id ${personId} is not found.`)
                        response.end(`Person for id ${personId} is not found.`)
                    }
                }    
            break;
            case "DELETE" :
                if(request.method === 'DELETE' && request.url.split('/').length > 2 && request.url.split('/')[2] != '') {
                    let newPersons;        
                    request.on('error', (error) => {
                        console.log(error)
                    })
                    
                    request.on('data', (chunk) => {

                    })
        
                    request.on('end', () => {
                        let personId = getPersonId(request.url);
                        newPersons = deletePersonFromList(persons, personId)
                        persons = [...newPersons];
                        console.log("new persons list",persons)
                        response.end(JSON.stringify(persons))
                        
                    })
                }
            break;
            case "POST" :
                if(request.method === "POST" && request.url.split('/').length === 2 || request.url.split('/').length > 2 && request.url.split('/')[2] != '') {
                    let body = '';
                    request.on('data', chunk => {
                        body += chunk.toString();
                    })
                    request.on('error', (error) => {
                        console.log(error)
                    })
                    request.on('end', () => {
                        persons = JSON.parse(createNewPersonForList(persons, body));
                        console.log(persons);
                        response.end(JSON.stringify(persons));
                    });
                }
            break;
            default :
                response.end(`Correct url is /person but not ${request.url}`)
                console.log(`Correct url is /person but not ${request.url}`)
                throw new Error('Url is not valid');
            break;
        }
    }
})

server.listen(PORT, ()=>{
    console.log(`Server started on port ${PORT}`)
})
