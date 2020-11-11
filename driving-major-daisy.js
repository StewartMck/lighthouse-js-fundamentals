const carPassing = function(cars, speed){
let time = Date.now();
cars.push({time: time, speed: speed});
return cars;
}
