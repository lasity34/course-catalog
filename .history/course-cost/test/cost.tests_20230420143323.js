
describe("this should test if values are true", function() {
    it("this should test to see if code value is true", function() {
        assert.deepEqual({ status: 'Invalid code' }, courseCost("p3", 24))
    })

    it("this should test to see if day number value is true", function() {
        // assert.equal("1", courseCost("r1", "2023-05-21"))
     const cost =   courseCost("r1", "2023-05-21")
        
    })
})

describe("this will test different courses for different prices", function() {
    it("this should test python course with discount", function() {
        
       const cost = courseCost("p1", "2023-05-01")
       console.log(cost)
        assert.deepEqual({ status: "success", code: "r1", description: "Python", cost: 7850, discount: 0, amountDue: 7850 } , cost)
    })
})