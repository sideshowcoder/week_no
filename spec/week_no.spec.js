require("../index.js")

describe("get week number", function(){
  describe("absolute week number", function() {
    it("is 0 for monday of the first week of 1970", function() {
      expect(new Date(1970, 0, 5).weekNo()).toBe(0);
    })

    it("is 0 for tuesday of the first week of 1970", function() {
      expect(new Date(1970, 0, 6).weekNo()).toBe(0);
    })

    it("is 52 for for the last week of 1970 which ends 1-1971", function() {
      expect(new Date(1971, 0, 5).weekNo()).toBe(52);
    })

    it("is 104 for the last week of 1971 which ends 1-1972", function() {
      expect(new Date(1972, 0, 5).weekNo()).toBe(104);
    })
  })

  describe("relative week number", function() {
    it("is 0 for monday of the first week of 1970", function() {
      expect(new Date(1970, 0, 5).weekNoRelative()).toBe(0);
    })

    it("is 0 for monday of the first week of 1971", function() {
      expect(new Date(1971, 0, 5).weekNoRelative()).toBe(0);
    })

    it("is 0 for monday of the first week of 1971", function() {
      expect(new Date(1973, 0, 5).weekNoRelative()).toBe(0);
    })
  })
})
