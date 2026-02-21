<<<<<<< HEAD
=======

>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // Эти две строки равны?
<<<<<<< HEAD
    expect(true).toBe(singleQuotedString === doubleQuotedString);
=======
    expect(FILL_ME_IN).toBe(singleQuotedString === doubleQuotedString);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // Эти две строки равны?
<<<<<<< HEAD
    expect("apple pie").toBe(fruit + " " + dish);
=======
    expect(FILL_ME_IN).toBe(fruit + " " + dish);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1));
    // В JavaScript нет типа "символ"
<<<<<<< HEAD
    expect("string").toBe(characterType);
=======
    expect(FILL_ME_IN).toBe(characterType);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // Какое значение в переменной stringWithAnEscapedCharacter?
<<<<<<< HEAD
    expect("Apple").toBe(stringWithAnEscapedCharacter);
=======
    expect(FILL_ME_IN).toBe(stringWithAnEscapedCharacter);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("string.length", function() {
    let fruit = "apple";
    // Какое значение в fruit.length?
<<<<<<< HEAD
    expect(5).toBe(fruit.length);
=======
    expect(FILL_ME_IN).toBe(fruit.length);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("slice", function() {
    let fruit = "apple pie";
    // Какое значение в fruit.slice(0,5)?
<<<<<<< HEAD
    expect("apple").toBe(fruit.slice(0,5));
  }); 
});
=======
    expect(FILL_ME_IN).toBe(fruit.slice(0,5));
  }); 
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
