// Code your solution in this file.

function lowerCaseDrivers(array){
  return array.map(function(driverName){
    return driverName.toLowerCase();
  })
};

function nameToAttributes(array){
  return array.map(function(driver){
    const splitNames = driver.split(' ')
    const driverFirst = splitNames[0]
    const driverLast = splitNames[1]

    return { firstName: driverFirst, lastName: driverLast };
  })
}

function attributesToPhrase(array){
  return array.map(function(driver){
    return`${driver.name} is from ${driver.hometown}`;
  });
}
