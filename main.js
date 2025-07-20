//Seleccionar show
//Seleccionar cantidad de entradas
//Seleccionar el sector
//Seleccionar en opciones las mesas y butacas disponibles (Que pasa con la cantidad de entradas? Ver si como solucionarlo, el mostrar las opciones.)
//Seleccionar el metodo de pago
//Mostrar resumen de compra
//Mensaje final compra


const shows = [
    {
        id: 0, autor: "Dani La Chepi", titulo: "Vivila como queres", fecha: "19-07-2025", dia: "Sabado", horario: "21:00",
        entradasSectorA: 6, entradasSectorB: 11, entradasSectorC: 6, entradasSectorD: 3, entradasDisponibles: 0, precio: 22000
    },
]

let cantidadEntradasSeleccionadas = 5
let showSeleccionado = 0
let sectorSeleccionado

shows[showSeleccionado].entradasDisponibles = shows[showSeleccionado].entradasSectorA + shows[showSeleccionado].entradasSectorB + shows[showSeleccionado].entradasSectorC + shows[showSeleccionado].entradasSectorD

function seleccionShow() {
    let listaShows = shows.map(p => `${p.id}) Show: ${p.titulo} - Autor: ${p.autor} - Fecha: ${p.fecha}`).join('\n');

    showSeleccionado = Number(prompt("Bienvenido al Teatro Bar \nSeleccionar el show que quieres ver: \n\n" + listaShows))
}

function seleccionCantidadEntradas() {
    let entradasSeleccionadas = Number(prompt(`Precio de la Entrada: $${shows[showSeleccionado].precio}\nSelecciona la cantidad de entradas (MAXIMO 10):`))

    if (isNaN(entradasSeleccionadas) || entradasSeleccionadas == null || entradasSeleccionadas == "" || entradasSeleccionadas === 0 || entradasSeleccionadas > 10) {
        alert("Campo vacío o dato incorrecto. Ingresá un número del 1 al 10")
    } else if (entradasSeleccionadas > shows[showSeleccionado].entradasDisponibles) {
        alert(`No hay entradas disponibles. \nQuedan: ${shows[showSeleccionado].entradasDisponibles} entradas disponibles.`)
    } else {
        shows[showSeleccionado].entradasDisponibles -= entradasSeleccionadas
        cantidadEntradasSeleccionadas = entradasSeleccionadas
    }
}

function seleccionarSector() {

    let bandera = true

    while (bandera) {

        let seleccionSector = prompt("Seleccionar un sector: \nA \nB \nC \nD").toUpperCase()

        switch (seleccionSector) {
            case "A":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorA){
                 alert ("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector A")
                    shows[showSeleccionado].entradasSectorA -= cantidadEntradasSeleccionadas
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;

            case "B":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorB){
                 alert ("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector B")
                    shows[showSeleccionado].entradasSectorB -= cantidadEntradasSeleccionadas
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;

            case "C":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorC){
                 alert ("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector C")
                    shows[showSeleccionado].entradasSectorC -= cantidadEntradasSeleccionadas
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;

            case "D":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorD){
                 alert ("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector D")
                    shows[showSeleccionado].entradasSectorD -= cantidadEntradasSeleccionadas
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;
            default:
                alert("Ingrese un sector válido.")
                break;
        }
    }
}