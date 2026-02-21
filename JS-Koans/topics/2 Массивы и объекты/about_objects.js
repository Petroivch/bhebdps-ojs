<<<<<<< HEAD
=======

>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
describe("About Objects (about_objects.js)", function() {
  it("object type", function() {
    let emptyObject = {};
    // Какой тип у объектов?
<<<<<<< HEAD
    expect("object").toBe(typeof emptyObject);
=======
    expect(FILL_ME_IN).toBe(typeof emptyObject);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("object literal notation", function() {
    let person = {
<<<<<<< HEAD
      name: "Amory Blaine",
      age: 102
=======
      FILL_ME_IN: FILL_ME_IN,
      FILL_ME_IN: FILL_ME_IN
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    };
    // Какое имя у объекта person?
    expect("Amory Blaine").toBe(person.name);
    // Какое значение в свойстве age?
    expect(102).toBe(person.age);
  });

  it("dynamically adding properties", function() {
    let person = {};
<<<<<<< HEAD
    person.name = "Amory Blaine";
    person.age = 102;
=======
    person.FILL_ME_IN = "Amory Blaine";
    person.FILL_ME_IN = 102;
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    // Какое имя у объекта person?
    expect("Amory Blaine").toBe(person.name);
    // Какое значение в свойстве age?
    expect(102).toBe(person.age);
  }); 

  it("adding properties from strings", function() {
    let person = {};
<<<<<<< HEAD
    person["name"] = "Amory Blaine";
    person["age"] = 102;
=======
    person["FILL_ME_IN"] = "Amory Blaine";
    person["FILL_ME_IN"] = 102;
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    // Какое имя у объекта person?
    expect("Amory Blaine").toBe(person.name);
    // Какое значение в свойстве age?
    expect(102).toBe(person.age);
  });

  it("adding functions", function() {
    let person = {
      name: "Amory Blaine",
      age: 102,
      toString: function() {
<<<<<<< HEAD
        return "I " + this.name + " am " + this.age + " years old.";  // Подсказка: используйте ключевое слово 'this' для обращения к объекту person.
=======
        return FILL_ME_IN;  // Подсказка: используйте ключевое слово 'this' для обращения к объекту person.
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
      }
    };
    // Какое значение возвращает метод toString?
    expect("I Amory Blaine am 102 years old.").toBe(person.toString());
  });

  it("property enumeration", function() {
    let keys = [];
    let values = [];
    let person = {name: 'Amory Blaine', age: 102, unemployed: true};
    for(let propertyName in person) {
      keys.push(propertyName);
      values.push(person[propertyName]);
    }
    // Какие имена свойств у объекта?
<<<<<<< HEAD
    expect(keys).toEqual(["name", "age", "unemployed"]);
    // Какие значения свойств у объекта?
    expect(values).toEqual(["Amory Blaine", 102, true]);
  });
});
=======
    expect(keys).toEqual([ FILL_ME_IN, FILL_ME_IN, FILL_ME_IN]);
    // Какие значения свойств у объекта?
    expect(values).toEqual([ FILL_ME_IN, FILL_ME_IN, FILL_ME_IN]);
  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
