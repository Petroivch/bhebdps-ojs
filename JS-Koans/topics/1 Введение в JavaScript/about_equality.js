<<<<<<< HEAD
describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + 4).toBe(7);
=======

describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + FILL_ME_IN).toBe(7);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("string equality", function() {
    // Выполните конкатенацию строк
<<<<<<< HEAD
    expect("3" + "7").toBe("37");
=======
    expect("3" + FILL_ME_IN).toBe("37");
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("equality without type coercion", function() {
    // Чему равно 3?
<<<<<<< HEAD
    expect(3 === 3).toBeTruthy();
=======
    expect(3 === FILL_ME_IN).toBeTruthy();
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("equality with type coercion", function() {
    // Какая строка будет равна 3, при нестрогом равенстве?
<<<<<<< HEAD
    expect(3 == "3").toBeTruthy();
=======
    expect(3 == FILL_ME_IN).toBeTruthy();
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("string literals", function() {
    // Типы кавычек взаимозамозаменяемы, но должны совпадать.
<<<<<<< HEAD
    expect("frankenstein" === "frankenstein").toBeTruthy();
    // Кавычки могут быть как одинарными, так и двойными.
    expect('frankenstein' === 'frankenstein').toBeTruthy();
=======
    expect(FILL_ME_IN === "frankenstein").toBeTruthy();
    // Кавычки могут быть как одинарными, так и двойными.
    expect(FILL_ME_IN === 'frankenstein').toBeTruthy();
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });
});