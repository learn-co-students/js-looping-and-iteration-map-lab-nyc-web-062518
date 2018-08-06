// Code your solution in this file.
function lowerCaseDrivers(drivers){
   return drivers.map(function(d){
    return d.toLowerCase();
  });
}

function nameToAttributes(drivers){
  return drivers.map(function(d){
    let splitName = d.split(' ');
    let firstName =  splitName[0];
    let lastName = splitName[1];
    return({firstName, lastName});
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(d){
    return(d.name + ' is from ' + d.hometown);
  });
}
