### README for my-jest-project

Environment Setup:
    1. CI/CD pipleline is configured for `master` push and pull_request event
    2. Code will be checkout contain `jest` test
    Docker `mbedval/studentendpoint` image containing api returning student data is deployed in docker image will be pull and deployed before test execution
    3. Docker with app will be started in detach mode at port 3000.
    4. test script execution environment will be created with docker in which npm packages will be installed and test will be executed
    5. once test are completed. express application is stopped and dockare container is removed. (as post script clean-liness)

    


##### contians sample test for test scenarios like
    1. example.test.js : sample code for jest UI Testing
    2. math.test.js : sample for mock testing for module based method.
    3. api.test.js  : api mock implementation 
            3.1 Test "Validate student get endpoint" will run a simple get test
            3.2 Mocking is example of validating to mock api response
 
