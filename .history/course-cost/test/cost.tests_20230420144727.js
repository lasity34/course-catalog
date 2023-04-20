
describe("this should test if values are true", function() {
    it("this should test to see if code value is true", function() {
        assert.deepEqual({ status: 'Invalid code' }, courseCost("p3", 24))
    })

    it("this should test to see if day number value is true", function() {
        assert.equal("1", courseCost("r1", "2023-05-21"))
        console.log(cost)
     const cost =   courseCost("r1", "2023-05-21")
        
    })
})

describe("this will test different courses for different prices", function() {
    it("this should test python course cost without discount", function() {
        
       const cost = courseCost("p1", "2023-05-01")
        assert.deepEqual({ status: "success", code: "r1", description: "Python", cost: 7850, discount: 0, amountDue: 7850 } , cost)
    })

    it("this should return python course cost with discount", function() {
        const cost = courseCost("p1", "2023-05-21")
        
        assert.deepEqual({ status: "success", code: "r1", description: "Python", cost: 7850, discount: 3140, amountDue: 4710 } , cost)
    })

    it("this should test Intro to PHP course course cost without discount", function() {
        
        const cost = courseCost("p2", "2023-05-01")
        
         assert.deepEqual({ status: "success", code: "r1", description: "Intro to PHP course", cost: 8990, discount: 0, amountDue: 8990 } , cost)
     })
 
     it("this should return python course cost with discount", function() {
         const cost = courseCost("p2", "2023-05-21")
        
         assert.deepEqual({ status: "success", code: "r1", description: "Intro to PHP course", cost: 8990, discount: 3596, amountDue: 5394 } , cost)
     })

     it("this should test Intro to PHP course course cost without discount", function() {
        
        const cost = courseCost("r1", "2023-05-01")
        console.log(cost)
         assert.deepEqual({ status: "success", code: "r1", description: "Ruby on Rails intro", cost: 5675, discount: 0, amountDue: 5675 } , cost)
     })
 
     it("this should return python course cost with discount", function() {
         const cost = courseCost("r1", "2023-05-21")
        
         assert.deepEqual({ status: "success", code: "r1", description: "Ruby on Rails intro", cost: 5675, discount: 2270, amountDue: 3405 } , cost)
     })

})