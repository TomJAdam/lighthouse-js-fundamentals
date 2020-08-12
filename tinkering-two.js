function rectangleArea(width, height) {
    if (width <= 0 || height <= 0) {
      return 'You need positive integers to calculate area!';
    }
    return width * height;
  }

  const rectInput = rectangleArea(0, 0);

  console.log(rectInput)


  //testing out ternary statments....
  
    var category = eatsPlants ? (eatsAnimals ? 'omnivore' : 'herbivore') : (eatsAnimals ? 'carnivore' : 'undefined');

    console.log(category);