<<<<<<< HEAD
=======

>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
describe("About Operators (about_operators.js)", function() {
  it("addition", function() {
    let result = 0;
    // Начиная переменную i с 0, добавьте i к результату и увеличивайте i на 1, пока i не станет равным 5
    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }
    // Какое значение получится в результате?
<<<<<<< HEAD
    expect(15).toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("assignment addition", function() {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      // Приведенный ниже код - это то же самое, что выполнить result = result + i; но более компактно
      result += i;
    }
    // Какое значение получится в результате?
<<<<<<< HEAD
    expect(15).toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }
    // Какое значение получится в результате?
<<<<<<< HEAD
    expect(2).toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("assignment subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }
    // Какое значение получится в результате?
<<<<<<< HEAD
    expect(2).toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  // Операторы присваивания доступны также для умножения и деления
  // Давайте изучим еще один, оператор "%", используемый для отображения остатка от деления

  it("modulus", function() {
    let result = 10;
    let x = 5;
    // Это точно так же, как и result = result % x
    result %= x;
    // Какое значение получится в результате?
<<<<<<< HEAD
    expect(0).toBe(result);
=======
    expect(FILL_ME_IN).toBe(result);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  // typeof возвращает строку с названием типа
  it("typeof", function() {
    // Какой тип у пустого объекта?
<<<<<<< HEAD
    expect("object").toBe(typeof {});
    // Какой тип у строк?
    expect("string").toBe(typeof 'apple');
    // Какой тип у -5?
    expect("number").toBe(typeof -5);
    // Какой тип у false?
    expect("boolean").toBe(typeof false);
  });
});
=======
    expect(FILL_ME_IN).toBe(typeof {});
    // Какой тип у строк?
    expect(FILL_ME_IN).toBe(typeof 'apple');
    // Какой тип у -5?
    expect(FILL_ME_IN).toBe(typeof -5);
    // Какой тип у false?
    expect(FILL_ME_IN).toBe(typeof false);
  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
