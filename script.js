let departureDateEntry = prompt("Digite a data da partida (formato DD/MM/YYYY)");

let departureDate = moment(departureDateEntry, "DD/MM/YYYY");

let today = moment();

let dateDiff = today - departureDate;

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1-Segundos\n2-Minutosn\3-Horas\n4-Dias");

if(chosenOption == "1") {
    let secondsDeparture = Math.round(dateDiff /1000);
    alert("Tempo de vôo: " + secondsDeparture + "Segundos");
} else if(chosenOption == "2") {
   let minutesOfDeparture = Math.round(dateDiff / 1000 /90);
    alert("Tempo de vôo: " + minutesOfDeparture + "minutos");
} else if (chosenOption == "3"){
    let hoursOfDeparture = Math.round(dateDiff / 1000/3600);
    alert("Tempo de vôo: " + hoursOfDeparture + "horas");
} else if(chosenOption == "4"){
    let daysOfDeparture = Math.round(dateDiff / 1000 /3600 /24);
    alert("Tempo de vôo: " + daysOfDeparture + "dias");
} else {
    alert("Opção inválida")
}