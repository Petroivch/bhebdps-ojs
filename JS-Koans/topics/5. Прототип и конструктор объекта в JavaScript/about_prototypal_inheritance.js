describe("About Prototypal Inheritance (about_prototypal_inheritance.js)", function() {
  // Этот шаблон определяет класс по его конструктору
  let Mammal = function(name) {
    this.name = name;
  }
  // То, что не нужно задавать в конструкторе, следует добавить в свойство прототипа конструктора.
  Mammal.prototype = {
    sayHi: function() {
      return "Hello, my name is " + this.name;
    }
  }

  it("defining a 'class'", function() {
    let eric  = new Mammal("Eric");

    // Что вернёт вызов метода?
<<<<<<< HEAD
    expect("Hello, my name is Eric").toBe(eric.sayHi());
=======
    expect(FILL_ME_IN).toBe(eric.sayHi());
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  // Добавим ещё один метод в класс Mammal, который использует метод sayHi.
  Mammal.prototype.favouriteSaying = function() {
    return this.name + "'s favourite saying is " + this.sayHi(); 
  }

  it("more functions", function() {
    let bobby = new Mammal("Bobby");

     // Что вернёт вызов метода?
<<<<<<< HEAD
    expect("Bobby's favourite saying is Hello, my name is Bobby").toBe(bobby.favouriteSaying()); 
=======
    expect(FILL_ME_IN).toBe(bobby.favouriteSaying()); 
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("calling functions added to a prototype after an object was created", function() {
    let paul = new Mammal("Paul");
    Mammal.prototype.numberOfLettersInName = function() {
      return this.name.length;
    };
    // следующее действие просит объект paul вызвать метод, который был добавлен
    // к прототипу Mammal после того, как paul был создан.

     // Что вернёт вызов метода?
<<<<<<< HEAD
    expect(4).toBe(paul.numberOfLettersInName());
=======
    expect(FILL_ME_IN).toBe(paul.numberOfLettersInName());
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  // https://learn.javascript.ru/prototype-inheritance
  function extend(child, supertype){  
    child.prototype = supertype.prototype;  
  } 

  // Дочерний класс Bat наследуется от родительского класса Mammal.
  function Bat(name, wingspan) {
    Mammal.call(this, name);
    this.wingspan = wingspan;
  }

  // Попробуем наследование
  extend(Bat, Mammal);

  it("Inheritance", function() {
    let lenny = new Bat("Lenny", "1.5m");

     // Что вернёт вызов метода?
<<<<<<< HEAD
    expect("Hello, my name is Lenny").toBe(lenny.sayHi());

    // Что находится в свойстве wingspan?
    expect("1.5m").toBe(lenny.wingspan);
=======
    expect(FILL_ME_IN).toBe(lenny.sayHi());

    // Что находится в свойстве wingspan?
    expect(FILL_ME_IN).toBe(lenny.wingspan);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });
});