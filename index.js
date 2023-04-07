

function receivesAFunction(callback){
  return callback();
}


function returnsANamedFunction(destination){
  return function travelDestination (destination){

    let savings = 5000;
    
    if (savings < 4500){
     return `We are not going to ${destination} this Summer.`;
    } else if (savings > 4500) {
      return `We are heading to ${destination} this Summer!!`;
    }
  
  }
  
}

const returnsAnAnonymousFunction = function(){
  return function (){
    console.log ('Annonymous');
  }
}
