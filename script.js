const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  
  set appetizers (appetizerIn) {
    this._courses.appetizers = appetizerIn;
  },
  set mains (mainsIn) {
    this._courses.mains = mainsIn;
  },
  set desserts (dessertsIn) {
    this._courses.desserts = dessertsIn;
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}, and the total price is ${totalPrice}`;
  }
};

menu.addDishToCourse('appetizers', 'thai salad', 4.00);
menu.addDishToCourse('appetizers', 'brave potatoes', 4.50);
menu.addDishToCourse('appetizers', 'chicken wings', 5.00);

menu.addDishToCourse('mains', 'steak', 18.00);
menu.addDishToCourse('mains', 'poke', 12.00);
menu.addDishToCourse('mains', 'shrimp risotto', 15.00);

menu.addDishToCourse('desserts', 'pudim', 4.00);
menu.addDishToCourse('desserts', 'pecan pie slice', 4.50);
menu.addDishToCourse('desserts', 'chocolate cake slice', 5.00);

const meal = menu.generateRandomMeal();
console.log(meal);


