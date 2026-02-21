<<<<<<< HEAD
describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = 1;
=======

describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = FILL_ME_IN;
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    // Присвойте значение переменной temp
    expect(temp).toBe(1);
  });
  
  it("global variables", function() {
    temp = 1; // Неиспользование let - это пример. На практике всегда используйте let.
    // глобальные переменные присваиваются объекту window
<<<<<<< HEAD
    expect(window.temp).toBe(temp);
  });
});
=======
    expect(window.FILL_ME_IN).toBe(temp);
  });
});


>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
