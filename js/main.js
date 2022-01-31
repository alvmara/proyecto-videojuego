
const cleanGame = () => {
    team1 = [];
    team2 = [];
    ganador = "";

}

const cambiaPantalla = (cambio) => {
    const pantallaDeseada = "screen" + cambio;
    const arrayPantallas = ["screen1", "screen2", "screen3", "screen4"];

    for (let pantalla of arrayPantallas) {
        document.getElementById(pantalla).style.display = "none";
    }

    document.getElementById(pantallaDeseada).style.display = "block";
}



