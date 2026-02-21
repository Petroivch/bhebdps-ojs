describe("About Mutability (about_mutability.js)", function() {
  it("should expect object properties to be public and mutable", function () {
    let aPerson = { firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

<<<<<<< HEAD
    expect(aPerson.firstname).toBe("Alan");
=======
    expect(aPerson.firstname).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });

  it("should understand that constructed properties are public and mutable", function () {
    function Person(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    let aPerson = new Person("John", "Smith");
    aPerson.firstname = "Alan";

<<<<<<< HEAD
    expect(aPerson.firstname).toBe("Alan");
=======
    expect(aPerson.firstname).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });
  
  it("should expect prototype properties to be public and mutable", function () {
    function Person(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
    Person.prototype.getFullName = function () {
      return this.firstname + " " + this.lastname;
    };
  
    let aPerson = new Person("John", "Smith");
<<<<<<< HEAD
    expect(aPerson.getFullName()).toBe("John Smith");
=======
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  
    aPerson.getFullName = function () {
      return this.lastname + ", " + this.firstname;
    };
  
<<<<<<< HEAD
    expect(aPerson.getFullName()).toBe("Smith, John");
=======
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
  });
  
  it("should know that variables inside a constructor and constructor args are private", function () {
    function Person(firstname, lastname){
      let fullName = firstname + " " + lastname;
  
      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    let aPerson = new Person("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";
  
<<<<<<< HEAD
    expect(aPerson.getFirstName()).toBe("John");
    expect(aPerson.getLastName()).toBe("Smith");
    expect(aPerson.getFullName()).toBe("John Smith");
=======
    expect(aPerson.getFirstName()).toBe(FILL_ME_IN);
    expect(aPerson.getLastName()).toBe(FILL_ME_IN);
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

<<<<<<< HEAD
    expect(aPerson.getFullName()).toBe("Andrews, Penny");
  });
});
=======
    expect(aPerson.getFullName()).toBe(FILL_ME_IN);
  });
});
>>>>>>> 4263e03719ab0f9be12e1de9834f77c43cd6b254
