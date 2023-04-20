
describe("this should test if values are true", function() {
    it("this should test to see if code value is true", function() {
        assert.deepEqual({ status: 'Invalid code' }, courseCost("p3", 24))
    })

    it("this should test to see if day number value is true", function() {
        assert.equal("1", courseCost("p1", "2021-05-21"))
    })
})