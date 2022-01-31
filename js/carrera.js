class Coche {
    constructor(modelo,marca,velocidad,peso,frenada,combustible) {
        this.modelo = modelo;
        this.marca = marca;
        this.velocidad = velocidad;
        this.peso = peso;
        this.frenada = frenada;
        this.combustible = combustible;
        this.metros = 0;
    }

    acelerar() {
        this.velocidad += 30;
    }


    frenada() {
        this.frenada = 0;
    }


}


let coche1 = new Coche("golf","volkswagen",200,1800,60,"gasolina");
let coche2 = new Coche("golf","volkswagen",200,1800,60,"gasolina");
let coche3 = new Coche("golf","volkswagen",200,1800,60,"gasolina");
let coche4 = new Coche("golf","volkswagen",200,1800,60,"gasolina");

let allCars = [coche1,coche2,coche3,coche4];

let team1 = [];

let team2 = [];

let ganador = "";



console.log(coche1.noHacerNada());