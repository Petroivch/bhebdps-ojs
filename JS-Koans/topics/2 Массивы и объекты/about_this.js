describe("About this (about_this.js)", function() {
  it("'this' inside a method", function () {
    let person = {
      name: 'bob',
      intro: function () {
<<<<<<< HEAD
        return "Hello, my name is " + this.name;
=======
        return "Hello, my name is " + this.FILL_ME_IN;
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
      }
    }

    // Если у объекта есть метод, можно ли получить доступ к свойствам внутри него?
    expect(person.intro()).toBe("Hello, my name is bob");
  });

  it("'this' on unattached function", function () {
    let person = {
      globalName: 'bob',
      intro: function () {
        return "Hello, my name is " + this.globalName;
      }
    }

    let alias = person.intro;

    // Если функция не вызывается как свойство объекта, 'this' является глобальным контекстом
    // Например глобальный объект window. Пожалуйста, не делайте этого на практике.
<<<<<<< HEAD
    window.globalName = 'Peter';
=======
    window.FILL_ME_IN = 'Peter';
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254

    // Какое значение будет у this, если это не часть объекта?
    expect(alias()).toBe("Hello, my name is Peter");
  });

  it("'this' set explicitly", function () {
    let person = {
      name: 'bob',
      intro: function () {
        return "Hello, my name is " + this.name;
      }
    }

    // Вызов функции с помощью "call" позволяет нам явно назначить "this"
<<<<<<< HEAD
    let message = person.intro.call({name: "Frank"});
=======
    let message = person.intro.call({FILL_ME_IN: "Frank"});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254

    // К чему относится "this" при использовании метода "call()"?
    expect(message).toBe("Hello, my name is Frank");
  });
<<<<<<< HEAD
});
=======
});

>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
