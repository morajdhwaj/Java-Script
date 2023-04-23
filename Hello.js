const person = {
  firstName: "John",
  lastName: "Doe",
  language: "EN",
  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName);
