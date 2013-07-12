require('../index.js')

describe('get week number', function(){
  it("should be 0 for 1970-1-5", function(){
    expect(new Date(1970, 0, 5).weekNo()).toBe(0);
  });
  it("should be 0 for 1970-1-6", function(){
    expect(new Date(1970, 0, 6).weekNo()).toBe(0);
  });
  it("should be 52 for 1971-1-5", function(){
    expect(new Date(1971, 0, 5).weekNo()).toBe(52);
  });
  it("should be 104 for 1972-1-5", function(){
    expect(new Date(1972, 0, 5).weekNo()).toBe(104);
  });
})
