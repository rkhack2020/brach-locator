const should = require('chai').should();
const request = require('supertest');
const app = require('../index');
const branch = require('./branch.mock-data');

const findProgram = (query, done) => {
    done(null, branch);
}

let branchName = 'ROCHESTER';
//  testsuite
describe('Testing to bank branch service', function () {
    //  testcase
    // eslint-disable-next-line no-undef


    it('should test that true === true', () => {
          true.should.be.equal(true)
    })

    it('Should handle a request to get branch', function (done) {
        this.timeout(3000);
        request(app)
            .get(`/api/v1/bankservice/${branchName}`)
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
                should.not.exist(err);
                should.exist(res.body, 'Response body should not be null or undefined');
                findProgram({ branchName: res.body.data }, (error, branch) => {
                    if (err) {
                        should.not.exist(error);
                        done();
                    } else {
                        res.body.data[0].PostalAddress.TownName.should.be.equal(branch.data[0].Brand[0].Branch[0].PostalAddress.TownName);
                        done();
                    }
                });
            });
    });
});