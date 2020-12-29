class Vehiculo {
    constructor(marca, modelo, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    }
  }
  
  class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
      super(marca, modelo, precio);
      this.puertas = puertas;
      this.precio = precio;
    }
    listado() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: $${this.precio.toLocaleString("es-AR", {minimumFractionDigits:2})}`;    
    }
  }
  
  class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
      super(marca, modelo, precio);
      this.cilindrada = cilindrada;
      this.precio = precio;
    }
    listado() {
        return `Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.puertas} // Precio: $${this.precio.toLocaleString("es-AR", {minimumFractionDigits:2})}`;    
    }
  }
  
  const vehicles = [
    new Auto('Peugeot', '206', 4, 200000),
    new Moto('Honda', 'Titan', '125c', 60000),
    new Auto('Peugeot', '208', 5, 250000),
    new Moto('Yamaha', 'YBR', '160c', 80500.5),
  ];

Array.prototype.hasMax = function(attrib) {
    return (this.length && this.reduce(function(prev, curr){ 
        return prev[attrib] > curr[attrib] ? prev : curr; 
    })) || null;
}

Array.prototype.hasMin = function(attrib) {
    return (this.length && this.reduce(function(prev, curr){ 
        return prev[attrib] < curr[attrib] ? prev : curr; 
    })) || null;
 }

const maxPriceVehicle = () => {
    const max = vehicles.hasMax("precio")
    const result = `Vehículo más caro: ${max.marca} ${max.modelo}` 
    console.log(result)
}

const minPriceVehicle = () => {
    const min = vehicles.hasMin("precio")
    const result = `Vehículo más barato: ${min.marca} ${min.modelo}` 
    console.log(result)
}

findModelByCharacter = () => {
    const vehicle = vehicles.filter(({modelo}) => modelo.includes("Y"))

    vehicle.forEach(vehicle => console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${vehicle.marca} ${vehicle.modelo} $${vehicle.precio.toLocaleString("es-AR", {minimumFractionDigits:2})}`));
}

const comparePrices = ( a, b ) => {
    if ( a.precio > b.precio ){
      return -1;
    }
    if ( a.precio < b.precio ){
      return 1;
    }
    return 0;
  }
  
const listadoPrecios = () => {
    const carOrder = vehicles.sort(comparePrices)
    console.log("Vehículos ordenados de mayor a menor:")
    carOrder.forEach(vehicle => console.log(vehicle.marca, vehicle.modelo));
}

vehicles.forEach(vehicle => console.log(vehicle.listado()));
console.log("=============================");
maxPriceVehicle()
minPriceVehicle()
findModelByCharacter()
console.log("=============================");
listadoPrecios()

