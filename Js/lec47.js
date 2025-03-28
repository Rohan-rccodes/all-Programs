// classes and defaults parameters in functions

//properties and methods

// '#' hashtag use to make any variable private

class human {
  age = 20;
  #wt = 502; //private variable
  ht = 5.5;

  //copnstructor are used to initialize the properties of the class

  constructor(newage, newht) {
    this.age = newage;
    this.ht = newht;
  }
  //behaviour
  walking() {
    console.log("walking", this.#wt);
  }

  running() {
    console.log("running");
  }

  get fetchweight() {
    return this.#wt;
  }

  set modifyweight(weight) {
    this.#wt = weight;
  }
}
//object

// console.log(obj1.ht);

//accessing function
// obj1.walking();

//passing value to constructor
let obj2 = new human(25, 12.5);

//accesing new ht age
console.log(obj2.age);
console.log(obj2.ht);

console.log(obj2.fetchweight);
