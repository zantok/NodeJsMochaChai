# NodeJsMochaChai
Running a test in Docker:
**docker-compose up**

2 docker containers are created, first for java server, second for Node test environment, Tests are waiting for server to listen port 8080 and then tests are starting to be executed with Junit reporter.
After tests are completed the test-results.xml file is created in the /app folder of docker container.

To run tests manually:
in tasks.js file change 
let server = "http://localhost:8080";

**java -jar 'test-engineer-exercise-0.0.1.jar'**

**mocha (to run tests in console output)**

**npm test (to run tests with junit xml reporter, results in test-results.xml root folder of project)**




Found 10 Bugs on server
1. POST Client id 0 is allowed while it should not be (allowed ids 1-100)
2. POST Wrong status code when not passing ID in body (expected 400, got 409)
3. POST Client id 100 is not allowed while it should be (allowed ids 1-100) 
4. PATCH if Name is not string expected code 400, actual 500
5. PATCH if Surname is not string expected code 400, actual 202
6. PATCH if email is not a string expected code 400, actual 500
7. PATCH if surname is missing expected 400, actual 202
8. GET if non existing ID provided expected code 404, actual 500
9. PATCH Surname is not modified by PATCH request
10. POST Email with missing @ sign returns code 201 instead of 400






**console output**


116 passing (2s)
  11 failing

  1) Server API
       POST  New /client
         It should NOT POST a new client, because of client data limitations less then 1:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 201
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:28:46
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  2) Server API
       POST  New /client
         It should NOT POST a new client, because of client data limitations missing id:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 409
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:28:46
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  3) Server API
       POST  New /client
         It should NOT POST a new client, because of client data limitations wrong email format:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 201
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:28:46
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  4) Server API
       POST  New /client
         It should POST a new client with id 1:

      Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code 201 but got 409
      + expected - actual

      -409
      +201

      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:49:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  5) Server API
       POST  New /client
         It should POST a new client with id 100:

      Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code 201 but got 400
      + expected - actual

      -400
      +201

      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:49:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  6) Server API
       PATCH   /client/{id}
         Following data provided name is not string:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 500
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:70:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\node_modules\superagent\lib\node\index.js:916:18
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\parsers\json.js:19:7)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  7) Server API
       PATCH   /client/{id}
         Following data provided surname is not string:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 202
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:70:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  8) Server API
       PATCH   /client/{id}
         Following data provided email is not string:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 500
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:70:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\node_modules\superagent\lib\node\index.js:916:18
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\parsers\json.js:19:7)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  9) Server API
       PATCH   /client/{id}
         Following data provided surname is missing:
     Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code '400' but got 202
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:70:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  10) Server API
       GET   /client/{id}
         Following data provided non existing id:

      Uncaught AssertionError: expected { Object (_events, _eventsCount, ...) } to have status code 404 but got 500
      + expected - actual

      -500
      +404

      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:89:42
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\index.js:916:18)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)

  11) Server API
       GET   /client/{id}
         Following data provided Existing id with correct patched data:
     Uncaught AssertionError: expected 'Surname 0' to include 1
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\test\tasks.js:97:54
      at Test.Request.callback (node_modules\superagent\lib\node\index.js:716:12)
      at C:\Users\Admin\Desktop\Programming\NodeJsMochaChai\node_modules\superagent\lib\node\index.js:916:18
      at IncomingMessage.<anonymous> (node_modules\superagent\lib\node\parsers\json.js:19:7)
      at endReadableNT (internal/streams/readable.js:1327:12)
      at processTicksAndRejections (internal/process/task_queues.js:80:21)
