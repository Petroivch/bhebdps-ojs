describe("About Control Structures (about_control_structures.js)", function(){
  it("if", function() {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }

    // каково значение переменной isPositive?
<<<<<<< HEAD
    expect(true).toBe(isPositive);
=======
    expect(FILL_ME_IN).toBe(isPositive);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("for", function() {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i;
    }

    // каково значение счетчика?
<<<<<<< HEAD
    expect(16).toBe(counter);
=======
    expect(FILL_ME_IN).toBe(counter);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("for in", function() {
    // Этот синтаксис будет описан в разделе об объектах
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    let result = "";
    // for in перечисляет имена свойств объекта
    for (let property_name in person) {
        result = result + property_name;
    }

    // Какое значение получится в результате?
<<<<<<< HEAD
    expect("nameage").toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("ternary operator", function() {
    let fruit = true ? "apple" : "orange";
<<<<<<< HEAD
    expect("apple").toBe(fruit, 'what is the value of fruit?');

    fruit = false ? "apple" : "orange";
    expect("orange").toBe(fruit, 'now what is the value of fruit?');
=======
    expect(FILL_ME_IN).toBe(fruit, 'what is the value of fruit?');

    fruit = false ? "apple" : "orange";
    expect(FILL_ME_IN).toBe(fruit, 'now what is the value of fruit?');
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("switch", function() {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1+1:
        result = 2;
        break;
    }

    // Какое значение получится в результате?
<<<<<<< HEAD
    expect(2).toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("switch default case", function() {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
          break;
      default:
        result = "Merry";
        break;
    }

    // Какое значение получится в результате?
<<<<<<< HEAD
    expect("Merry").toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("null coalescing", function() {
    let result = null || "a value";

    // Какое значение получится в результате?
<<<<<<< HEAD
    expect("a value").toBe(result);
  });
});
=======
    expect(FILL_ME_IN).toBe(result);
  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
