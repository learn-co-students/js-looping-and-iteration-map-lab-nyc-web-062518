// Code your solution in this file.

const drivers = ['Bobby Smith', 'Sammy Watkins', 'Sally Jenkins', 'Annette Sawyer', 'Sarah Hucklebee', 'bobby ridge'];


function lowerCaseDrivers(array) {
  const lowercasedWords = array.map(name => name.toLowerCase());
  return lowercasedWords
}


function nameToAttributes(array) {
    new_arr = []
    array.map(driver => {
    const splitNames = driver.split(' ')
    const driverFirst = splitNames[0]
    const driverLast = splitNames[1]
    new_arr.push({ firstName: driverFirst, lastName: driverLast })
  })
  return new_arr
}


// "<NAME OF DRIVER> is from <HOMETOWN>"
function attributesToPhrase(array){
  return array.map(driver => {return`${driver.name} is from ${driver.hometown}`})
}
