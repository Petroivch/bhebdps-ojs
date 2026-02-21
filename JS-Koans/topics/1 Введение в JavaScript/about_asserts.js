describe("About Asserts (about_asserts.js)", function() {
  it('should expect true', function() {
    // Ваше путешествие начинается здесь: Замените значение false на true 
<<<<<<< HEAD
    expect(true).toBe(true);
=======
    expect(false).toBe(true);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  // Чтобы понять результат теста, мы должны сравнить ожидаемое значение с реальным.
  it('should expect equality', function() {
<<<<<<< HEAD
    let expectedValue = 2;
=======
    let expectedValue = FILL_ME_IN;
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Некоторые способы утверждения равенства лучше других.
  it('should assert equality a better way', function() {
<<<<<<< HEAD
    let expectedValue = 2;
    let actualValue = 1 + 1;

    // toEqual() сравнивает, используя равенство эквивалетности.
=======
    let expectedValue = FILL_ME_IN;
    let actualValue = 1 + 1;

  // toEqual() сравнивает, используя равенство эквивалетности.
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    expect(actualValue).toEqual(expectedValue);
  });

  // Иногда нужно быть точным в том, что вы "печатаете".
  it('should assert equality with ===', function() {
<<<<<<< HEAD
    let expectedValue = "2";
    let actualValue = (1 + 1).toString();

    // toBe() всегда использует строе равенство (===).
=======
    let expectedValue = FILL_ME_IN;
    let actualValue = (1 + 1).toString();

  // toBe() всегда использует строе равенство (===).
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
    expect(actualValue).toBe(expectedValue);
  });

  // Иногда мы просим вас заполнить значения.
  it('should have filled in values', function() {
<<<<<<< HEAD
    expect(1 + 1).toEqual(2);
  });
});
=======
    expect(1 + 1).toEqual(FILL_ME_IN);
  });
});


>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
