// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function (driver){
    return driver.toLowerCase();
});
}

function nameToAttributes(drivers){
  return drivers.map(function (driver){
    const driverFName = driver.split(' ')[0];
    const driverLNamee = driver.split(' ')[1];

  return {firstName: driverFName, lastName: driverLNamee };
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
    debugger
  });
}
