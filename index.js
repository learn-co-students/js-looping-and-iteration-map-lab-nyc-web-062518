function lowerCaseDrivers(drivers) {
  return drivers.map(
    function(driver) {
      return driver.toLowerCase();
    }
  )
}

function nameToAttributes(drivers) {
  return drivers.map(
    function(driver) {
      splitName = driver.split(" ");
      const driverFirstName = splitName[0];
      const driverLastName = splitName[1];
      return Object.assign({}, {firstName: driverFirstName, lastName: driverLastName});
    }
  )
}

function attributesToPhrase(drivers) {
  return drivers.map(
    function(driver) {
      return `${driver.name} is from ${driver.hometown}`
    }
  )
}
