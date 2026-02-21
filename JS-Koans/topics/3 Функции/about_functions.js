describe("About Functions (about_functions.js)", function() {

  it("should declare functions", function() {

    function add(a, b) {
      return a + b;
    }

<<<<<<< HEAD
    expect(add(1, 2)).toBe(3);
=======
    expect(add(1, 2)).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("should know internal variables override outer variables", function () {
    let message = "Outer";

    function getMessage() {
      return message;
    }

    function overrideMessage() {
      let message = "Inner";
      return message;
    }

<<<<<<< HEAD
    expect(getMessage()).toBe("Outer");
    expect(overrideMessage()).toBe("Inner");
    expect(message).toBe("Outer");
=======
    expect(getMessage()).toBe(FILL_ME_IN);
    expect(overrideMessage()).toBe(FILL_ME_IN);
    expect(message).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("should have lexical scoping", function () {
    let variable = "top-level";
    function parentfunction() {
      let variable = "local";
      function childfunction() {
        return variable;
      }
      return childfunction();
    }
<<<<<<< HEAD
    expect(parentfunction()).toBe("local");
=======
    expect(parentfunction()).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("should use lexical scoping to synthesise functions", function () {

    function makeMysteryFunction(makerValue){
      let newFunction = function doMysteriousThing(param){
        return makerValue + param;
      };
      return newFunction;
    }

    let mysteryFunction3 = makeMysteryFunction(3);
    let mysteryFunction5 = makeMysteryFunction(5);

<<<<<<< HEAD
    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(23);
=======
    expect(mysteryFunction3(10) + mysteryFunction5(5)).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("should allow extra function arguments", function () {

    function returnFirstArg(firstArg) {
      return firstArg;
    }

<<<<<<< HEAD
    expect(returnFirstArg("first", "second", "third")).toBe("first");
=======
    expect(returnFirstArg("first", "second", "third")).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254

    function returnSecondArg(firstArg, secondArg) {
      return secondArg;
    }

<<<<<<< HEAD
    expect(returnSecondArg("only give first arg")).toBe(undefined);
=======
    expect(returnSecondArg("only give first arg")).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254

    function returnAllArgs() {
      let argsArray = [];
      for (let i = 0; i < arguments.length; i += 1) {
        argsArray.push(arguments[i]);
      }
      return argsArray.join(",");
    }

    expect(returnAllArgs("first", "second", "third")).toBe("first,second,third");
  });

  it("should pass functions as values", function () {

    let appendRules = function (name) {
      return name + " rules!";
    };

    let appendDoubleRules = function (name) {
      return name + " totally rules!";
    };

    let praiseSinger = { givePraise: appendRules };
<<<<<<< HEAD
    expect(praiseSinger.givePraise("John")).toBe("John rules!");

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe("Mary totally rules!");

  });
});
=======
    expect(praiseSinger.givePraise("John")).toBe(FILL_ME_IN);

    praiseSinger.givePraise = appendDoubleRules;
    expect(praiseSinger.givePraise("Mary")).toBe(FILL_ME_IN);

  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
