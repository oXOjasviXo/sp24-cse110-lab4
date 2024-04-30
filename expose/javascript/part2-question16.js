let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let property in statistics){
    let val = statistics[property];
    if(property.startsWith('r') || val % 2 !== 0){
        console.log(val);
    }
}