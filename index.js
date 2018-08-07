// Code your solution in this file.
function lowerCaseDrivers(arr) {
  return arr.map(function(item) {
    return item.toLowerCase()
  })
}
function nameToAttributes(arr) {
  return arr.map(function(item) {
    return {firstName: item.split(" ")[0], lastName: item.split(" ")[1]}
  })
}
function attributesToPhrase(arr) {
  return arr.map(function(item) {
    return `${item.name} is from ${item.hometown}`
  })
}
