// "use strict"

const building = {
  floors: 5,
  printThisES5: function() {
    console.log(this);
  },
  printThisES6: () => console.log(this),
};

// the object that this function is a property of
building.printThisES5();
// the object which has the object that this function is a property of as a property (surrounding scope)
building.printThisES6();

function Dinosaur(name) {
  this.name = name;
  const self = this;

  innerES5();
  function innerES5() {
    // `use strict` makes this `this` `undefined`
    console.log('thisES5: ', this);
    console.log('self: ', self);
  }

  const innerES6 = () => {
    console.log('thisES6: ', this);
    console.log('self: ', self);
  }
  innerES6();
}

const myDinosaur = new Dinosaur('Dino');
