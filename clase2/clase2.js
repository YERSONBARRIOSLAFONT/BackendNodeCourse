const cars = [{
    brand: 'ferrari', 
    costo: 50000000, 
    type: 'deportivo'
},
{
    brand: 'Toyota', 
    costo: 70000000, 
    type: 'todoTerreno'
},
{
    brand: 'Lamborghini', 
    costo: 100000000, 
    type: 'deportivo'
},
];

/*const carsType = cars.map((car) => car.type.toLocaleLowerCase())
console.log(carsType);

const typeSearch = "deportivo"

if (carsType.includes(typeSearch)) {
    console.log("Existe el modelo buscado");
} else {
    console.log("No existe el modelo buscado");
}

const carsPrices = cars.map((car) => car.costo)
console.log(carsPrices);*/

console.log(
    'using objrct.KEYS method *** ', Object.keys(cars),
    Object.keys(cars[0])
    );
console.log('using objrct.VALUES method *** ');
console.log('using objrct.ENTRIES method *** ');