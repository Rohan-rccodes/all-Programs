// classes and defaults parameters in functions

//properties and methods

// '#' hashtag use to make any variable private

class human {
  age = 20;
  #wt = 50; //private variable
  ht = 5.5;

  //behaviour
  walking() {
    console.log("walking", this.#wt);
  }

  running() {
    console.log("running");
  }
}

//object


let obj1 = new human();
console.log(obj1.age);
console.log(obj1.wt);
console.log(obj1.ht);

//accessing function
obj1.walking();