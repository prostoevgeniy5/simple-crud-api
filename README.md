**Simple CRUD API**

Your task is to implement simple CRUD API using in-memory database underneath.
NB! You must create new repository for this task. Its name must be simple-crud-api i.e. full link to the repository must be https://github.com/%your-gihub-id%/simple-crud-api.
Details:

    The task must be solved using only pure Node.js. Any libraries and packages (except nodemon, eslint and its plugins, prettier and its plugins, uuid, webpack and its plugins, testing tools, dotenv) are prohibited.
    API path /person:
        GET /person or /person/${personId} should return all persons or person with corresponding personId
        POST /person is used to create record about new person and store it in database
        PUT /person/${personId} is used to update record about existing person
        DELETE /person/${personId} is used to delete record about existing person from database
    Persons are stored as objects that have following properties:
        id — unique identifier (string, uuid) generated on server side
        name — person's name (string, required)
        age — person's age (number, required)
        hobbies — person's hobbies (array of strings or empty array, required)
    Requests to non-existing endpoints (e.g. /some-non/existing/resource) should be handled.
    Internal server errors should be handled and processed correctly.
    Value of port on which application is running should be stored in .env file.
    There should be 2 modes of running application: development and production
    There could be some tests for API.
    ///////////////////////////////////////
    Ваша задача - реализовать простой CRUD API, используя базу данных в памяти внизу.
NB! Вы должны создать новый репозиторий для этой задачи. Его имя должно быть simple-crud-api, т.е. полная ссылка на репозиторий должна быть https://github.com/%your-gihub-id%/simple-crud-api.
Подробности:

    Задачу нужно решать только на чистом Node.js. Любые библиотеки и пакеты (кроме nodemon, eslint и его плагинов, prettier и его плагинов, uuid, webpack и его плагинов, инструментов тестирования, dotenv) запрещены.
    Путь к API / человек:
        GET / person или / person / $ {personId} должен вернуть всех лиц или лиц с соответствующим personId.
        POST / person используется для создания записи о новом человеке и сохранения ее в базе данных.
        PUT / person / $ {personId} используется для обновления записи о существующем человеке.
        DELETE / person / $ {personId} используется для удаления записи о существующем человеке из базы данных
    Лица хранятся как объекты, обладающие следующими свойствами:
        id - уникальный идентификатор (строка, uuid), сгенерированный на стороне сервера
        name - имя человека (строка, обязательно)
        age - возраст человека (число, обязательно)
        хобби - хобби человека (массив строк или пустой массив, обязательно)
    Запросы к несуществующим конечным точкам (например, / some-non / existing / resource) должны обрабатываться.
    Внутренние ошибки сервера должны обрабатываться и обрабатываться правильно.
    Значение порта, на котором запущено приложение, должно храниться в файле .env.
    Должно быть 2 режима работы приложения: разработка и продакшн.
    Могут быть какие-то тесты для API. 
