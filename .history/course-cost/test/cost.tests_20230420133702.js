
describe("this should test if values are true", function() {
    it("this should test to see if code value is true", function() {
        assert.deepEqual({ status: 'Invalid code' }, courseCost("p3", 24))
    })

    it("this should test to see if day number value is true", function() {
        assert.equal("1", courseCost("r1", "2023-05-21"))
    })
})

describe("this will test different courses for different prices", function() {
    it("this should test python course without discount", function() {
       
        assert.equal(7850, courseCost("p1", "2023-05-01"))
    })
})