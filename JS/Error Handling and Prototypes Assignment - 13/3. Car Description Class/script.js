class Car {
    constructor(company, model, year) {
      this.company = company;
      this.model = model;
      this.year = year;
    }
  
    getDescription() {
      return `This is a ${this.year} ${this.company} ${this.model}`;
    }
  }
  
  // Instantiate an instance of the Car class
  const myCar = new Car("Toyota", "Camry", 2022);
  
  // Call the getDescription method
  const description = myCar.getDescription();
  console.log(description);
  