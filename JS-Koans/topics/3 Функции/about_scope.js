describe("About Scope (about_scope.js)", function() {
  thisIsAGlobalVariable = 77;

  it("global variables", function() {
    // определено ли thisIsAGlobalVariable в этой области видимости?
<<<<<<< HEAD
    expect(77).toBe(thisIsAGlobalVariable);
=======
    expect(FILL_ME_IN).toBe(thisIsAGlobalVariable);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("variables declared inside of a function", function() {
    let outerVariable = "outer";

    // это самовызывающаяся функция. Обратите внимание, что она вызывает себя в конце на скобки вызова: ().
    (function() {
      let innerVariable = "inner";
      // определено ли outerVariable в этой области видимости?
<<<<<<< HEAD
      expect("outer").toBe(outerVariable);
      // определено ли innerVariable в этой области видимости?
      expect("inner").toBe(innerVariable);
    })();

    // определено ли outerVariable в этой области видимости?
    expect("outer").toBe(outerVariable);
    // определено ли innerVariable в этой области видимости?
    expect("undefined").toBe(typeof(innerVariable));
  });
});
=======
      expect(FILL_ME_IN).toBe(outerVariable);
      // определено ли innerVariable в этой области видимости?
      expect(FILL_ME_IN).toBe(innerVariable);
    })();

    // определено ли outerVariable в этой области видимости?
    expect(FILL_ME_IN).toBe(outerVariable);
    // определено ли innerVariable в этой области видимости?
    expect(FILL_ME_IN).toBe(typeof(innerVariable));
  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
