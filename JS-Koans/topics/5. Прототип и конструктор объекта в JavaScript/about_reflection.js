describe("About Reflection (about_reflection.js)", function() {
  function A() {
    this.aprop = "A";
  };

  function B() {
    this.bprop = "B";
  };

  B.prototype = new A();

  it("hasOwnProperty", function() {
    let b = new B();

    let keys = [];
    for (let propertyName in b) {
      keys.push(propertyName);
    }
    // Сколько элементов в массиве keys?
<<<<<<< HEAD
    expect(2).toBe(keys.length);
    // Какие это элементы?
    expect(["bprop", "aprop"]).toEqual(keys);
=======
    expect(FILL_ME_IN).toBe(keys.length);
    // Какие это элементы?
    expect([FILL_ME_IN, FILL_ME_IN]).toEqual(keys);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254

    // hasOwnProperty возвращает true, если параметр является свойством непосредственно объекта,
    // но не в том случае, если это свойство доступно через цепочку прототипов.
    let ownKeys = [];
    for(let propertyName in b) {
      if (b.hasOwnProperty(propertyName)) {
        ownKeys.push(propertyName);
      }
    }

    // Сколько элементов в массиве ownKeys?
<<<<<<< HEAD
    expect(1).toBe(ownKeys.length);
    // Какие это элементы?
    expect(["bprop"]).toEqual(ownKeys);
=======
    expect(FILL_ME_IN).toBe(ownKeys.length);
    // Какие это элементы?
    expect([FILL_ME_IN]).toEqual(ownKeys);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("constructor property", function () {
    let a = new A();
    let b = new B();
    // Какой тип конструктора a?
<<<<<<< HEAD
    expect("function").toBe(typeof a.constructor);
    // Какое имя у конструктора a?
    expect("A").toBe(a.constructor.name);
    // Какое имя у конструктора b?
    expect("A").toBe(b.constructor.name);
  });
});
=======
    expect(FILL_ME_IN).toBe(typeof a.constructor);
    // Какое имя у конструктора a?
    expect(FILL_ME_IN).toBe(a.constructor.name);
    // Какое имя у конструктора b?
    expect(FILL_ME_IN).toBe(b.constructor.name);
  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
