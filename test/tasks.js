let chai = require("chai");
let chaiHttp = require("chai-http");
let server = "http://web:8080";
let postClients = require("./testData/postClients.json");
let patchClients = require("./testData/patchClients.json");
let getClients = require("./testData/getClients.json");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Server API', () => {

    /*
     * Test the POST route
     */

    //Wrong data provided, should fail
    postClients.forEach(testData => {
        describe("POST  New /client", () => {
            it("It should NOT POST a new client, because of client data limitations " +testData.description , (done) => {
        
                    chai.request(server)                
                    .post("/client")
                    .send(testData.data)
                    .end((err, response) => {
                        response.should.have.status(testData.responseCode);
                    done();
                    });
            });
        });    
    });
    
    //Correct data provided, all should Succeed
    for (let i=1; i <=100 ; i++){
    describe("POST  New /client", () => {
        let clientData = {
            id: i,
            name: "UserName"+i,
            surname: "Surname"+i,
            email: `Username.Surname${i}@fakeMail.com`
        };
        it(`It should POST a new client with id ${i}`, (done) => {
                chai.request(server)                
                .post("/client")
                .send(clientData)
                .end((err, response) => {
                    response.should.have.status(201);
                done();
                });

        });

    });
}

    /*
     * Test the PATCH route
    PATCH client update tests
     */

patchClients.forEach(testData => {
    describe("PATCH   /client/{id}", () => {
        it("Following data provided " +testData.description , (done) => {
                chai.request(server)                
                .patch("/client/"+testData.id)
                .send(testData.data)
                .end((err, response) => {
                    response.should.have.status(testData.responseCode);
                done();
                });
        });
    });    
});


    /*
     * Test the GET route
    GET client tests
     */

getClients.forEach(testData => {
    describe("GET   /client/{id}", () => {
        it("Following data provided " +testData.description , (done) => {
                chai.request(server)                
                .get("/client/"+testData.data.id)
                .end((err, response) => {
                    response.should.have.status(testData.responseCode);              
                    if(testData.responseCode==200){
                        response.body.should.have.property('id');
                        response.body.should.have.property('name');
                        response.body.should.have.property('surname');
                        response.body.should.have.property('email');
                        response.body.name.should.contain(testData.data.id);
                        response.body.name.should.contain(testData.data.identifier);
                        response.body.surname.should.contain(testData.data.id);
                        response.body.surname.should.contain(testData.data.identifier);
                        response.body.email.should.contain(testData.data.id);
                        response.body.email.should.contain(testData.data.identifier);
                    }
                done();
                });
        });
    });    
});

});


