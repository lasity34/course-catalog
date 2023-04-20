
describe("this should test if values are true", function() {
    it("this should test to see if code value is true", function() {
        assert.deepEqual({ status: 'Invalid code' }, courseCost("p3", 24))
    })

    it("this should test to see if day number value is true", function() {
        assert.deepEqual("1", courseCost("p1", "1995-12-17T03:24:00"))
    })
})