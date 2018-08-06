// Code your solution in this file.
function lowerCaseDrivers(array) {
  const newArray = array.map(function (d){ return d.toLowerCase()})
  return newArray
}

function nameToAttributes(array){

  objectDrivers = array.map(function (d) { return Object.assign({}, {firstName: d.split(" ")[0], lastName: d.split(" ")[1]})
  }
)

  return objectDrivers
}

function attributesToPhrase(array){

  driverPhrases = array.map(function (d) {
    return `${d.name} is from ${d.hometown}`
  })
  return driverPhrases
}
