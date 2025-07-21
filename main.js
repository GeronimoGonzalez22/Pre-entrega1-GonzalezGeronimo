//Seleccionar show
//Seleccionar cantidad de entradas
//Seleccionar el sector
//Seleccionar en opciones las mesas y butacas disponibles (Que pasa con la cantidad de entradas? Ver si como solucionarlo, el mostrar las opciones.)
//Seleccionar el metodo de pag
//Mostrar resumen de compra
//Mensaje final compra


const shows = [
    {
        id: 0, autor: "Dani La Chepi", titulo: "Vivila como queres", fecha: "19-07-2025", dia: "Sabado", horario: "21:00", mes: "Julio",
        entradasSectorA: 6, entradasSectorB: 11, entradasSectorC: 6, entradasSectorD: 3, precio: 22000
    },
    {
        id: 1, autor: "Hector Rossi", titulo: "Transnoche paranormal", fecha: "20-07-2025", dia: "Domingo", horario: "20:00", mes: "Julio",
        entradasSectorA: 3, entradasSectorB: 9, entradasSectorC: 5, entradasSectorD: 2, precio: 19000
    },
    {
        id: 2, autor: "Sole Macchi", titulo: "Mentime que me gusta", fecha: "25-07-2025", dia: "Viernes", horario: "21:00", mes: "Julio",
        entradasSectorA: 2, entradasSectorB: 5, entradasSectorC: 4, entradasSectorD: 8, precio: 25000
    },
    {
        id: 3, autor: "Nanutria", titulo: "El showsito de Nanutria", fecha: "26-07-2025", dia: "Sabado", horario: "21:00", mes: "Julio",
        entradasSectorA: 6, entradasSectorB: 8, entradasSectorC: 2, entradasSectorD: 4, precio: 20000
    },
    {
        id: 4, autor: "Lucas Upstein", titulo: "Angel Caido", fecha: "01-08-2025", dia: "Viernes", horario: "21:00", mes: "Agosto",
        entradasSectorA: 2, entradasSectorB: 1, entradasSectorC: 4, entradasSectorD: 3, precio: 22000
    },
    {
        id: 5, autor: "Noelia Custodio", titulo: "Cerdo de Miel", fecha: "02-08-2025", dia: "Sabado", horario: "21:00", mes: "Agosto",
        entradasSectorA: 1, entradasSectorB: 3, entradasSectorC: 4, entradasSectorD: 1, precio: 15000
    },
]

let cantidadEntradasSeleccionadas
let showSeleccionado
let sectorSeleccionado
let metodoPago

function seleccionShow() {
    let listaShows = shows.map(p => `${p.id}-  Show: ${p.titulo} - ${p.autor} - Fecha: ${p.fecha}`).join('\n');
    let bandera = true

    while (bandera) {
        showSeleccionado = prompt("Bienvenido al Teatro Bar \nSeleccionar el show que quieres ver: \n\n" + listaShows);

        if (showSeleccionado === null || showSeleccionado.trim() === "" || isNaN(showSeleccionado)) {
            alert("Opción no válida.");
            continue;
        }

        showSeleccionado = Number(showSeleccionado);

        if (showSeleccionado < 0 || showSeleccionado >= shows.length) {
            alert("Opción no válida.");
        } else {
            bandera = false;
        }
    }

}

function seleccionCantidadEntradas() {
    let bandera = true;

    while (bandera) {
        let entradasSeleccionadas = prompt(`Precio de la Entrada: $${shows[showSeleccionado].precio}\nSelecciona la cantidad de entradas (MAXIMO 10):`);

        if (entradasSeleccionadas === null || entradasSeleccionadas.trim() === "") {
            alert("Opción no válida.");
            continue;
        }

        entradasSeleccionadas = Number(entradasSeleccionadas);

        if (isNaN(entradasSeleccionadas) || entradasSeleccionadas <= 0 || entradasSeleccionadas > 10 || !Number.isInteger(entradasSeleccionadas)) {
            alert("Ingresá un número entero del 1 al 10");
            continue;
        }

        let entradasDisponibles = calcularEntradasDisponibles(shows[showSeleccionado]);

        if (entradasSeleccionadas > entradasDisponibles) {
            alert(`No hay entradas disponibles. \nQuedan: ${entradasDisponibles} entradas disponibles.`);
            continue;
        }

        if (shows[showSeleccionado].entradasSectorA < entradasSeleccionadas &&
            shows[showSeleccionado].entradasSectorB < entradasSeleccionadas &&
            shows[showSeleccionado].entradasSectorC < entradasSeleccionadas &&
            shows[showSeleccionado].entradasSectorD < entradasSeleccionadas) {
            alert(`No hay ningún sector que tenga ${entradasSeleccionadas} entradas disponibles.\nEntradas disponibles por sector:\nSector A: ${shows[showSeleccionado].entradasSectorA}\nSector B: ${shows[showSeleccionado].entradasSectorB}\nSector C: ${shows[showSeleccionado].entradasSectorC}\nSector D: ${shows[showSeleccionado].entradasSectorD}`);
            continue;
        }

        cantidadEntradasSeleccionadas = entradasSeleccionadas;
        bandera = false;
    }
}

function seleccionarSector() {

    let bandera = true

    while (bandera) {

        let seleccionSector = prompt("Seleccionar un sector: \nA \nB \nC \nD").toUpperCase()

        switch (seleccionSector) {
            case "A":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorA) {
                    alert("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector A")
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;

            case "B":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorB) {
                    alert("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector B")
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;

            case "C":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorC) {
                    alert("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector C")
                    sectorSeleccionado = seleccionSector
                    bandera = false
                }
                break;

            case "D":
                if (cantidadEntradasSeleccionadas > shows[showSeleccionado].entradasSectorD) {
                    alert("No hay entradas suficientes en el sector. Selecciona otro sector.")
                } else {
                    alert("Seleccionaste el Sector D")
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

function seleccionarMetodoPago() {
    let bandera = true

    while (bandera) {
        metodoPago = (prompt("Selecciona el metodo de pago:\n 1- Tarjeta de Credito/Debito\n 2- Mercadopago"))

        switch (metodoPago) {
            case "1":
                let pago = pagoTarjeta()
                if (pago) {
                    let confirmacion = confirm(`Datos de tarjeta ingresados con éxito\n\nResumen de compra:\nShow: ${shows[showSeleccionado].autor}/${shows[showSeleccionado].titulo}\nFecha: ${shows[showSeleccionado].fecha}\nCantidad de entradas: ${cantidadEntradasSeleccionadas}, Sector: ${sectorSeleccionado}\nPrecio a pagar: $${cantidadEntradasSeleccionadas * shows[showSeleccionado].precio}\n\nDesea confirmar su compra?`)
                    if (confirmacion) {
                        mensajeCompraExito()
                        restarEntradasSector()
                        bandera = false
                    }
                }
                break;
            case "2":
                let confirmacion = confirm(`Dirigiendo a Mercadopago...\n\nResumen de compra:\nShow: ${shows[showSeleccionado].autor}/${shows[showSeleccionado].titulo}\nFecha: ${shows[showSeleccionado].fecha}\nCantidad de entradas: ${cantidadEntradasSeleccionadas}, Sector: ${sectorSeleccionado}\nPrecio a pagar: $${cantidadEntradasSeleccionadas * shows[showSeleccionado].precio}\n\nDeseas completar tu pago?`)
                if (confirmacion) {
                    mensajeCompraExito()
                    restarEntradasSector()
                    bandera = false
                }
                break;
            case null:
                alert("Elije una opcion válida.")
                break;
            default:
                alert("Elije una opcion válida.")
                break;
        }
    }
}

function calcularEntradasDisponibles(show) {
    return show.entradasSectorA +
        show.entradasSectorB +
        show.entradasSectorC +
        show.entradasSectorD
}

function pagoTarjeta() {
    let nombreTitular = prompt("Ingresá el nombre del titular de la tarjeta:");
    if (nombreTitular === null || nombreTitular.trim() === "" || !isNaN(nombreTitular)) {
        alert("Operación cancelada o nombre inválido.");
        return null;
    }

    let numeroTarjeta = prompt("Ingresá el número de la tarjeta (16 dígitos):");
    if (numeroTarjeta === null || !/^\d{16}$/.test(numeroTarjeta)) {
        alert("Operación cancelada o número inválido.");
        return null;
    }

    let vencimiento = prompt("Ingresá la fecha de vencimiento (MM/AA):");
    if (vencimiento === null || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(vencimiento)) {
        alert("Operación cancelada o vencimiento inválido.");
        return null;
    }

    let codigoSeguridad = prompt("Ingresá el código de seguridad (CVV de 3 o 4 dígitos):");
    if (codigoSeguridad === null || !/^\d{3,4}$/.test(codigoSeguridad)) {
        alert("Operación cancelada o código inválido.");
        return null;
    }

    let dniTitular = prompt("Ingresá el DNI del titular (sin puntos):");
    if (dniTitular === null || !/^\d{8}$/.test(dniTitular)) {
        alert("Operación cancelada o DNI inválido.");
        return null;
    }

    return {
        titular: nombreTitular.trim(),
        numeroTarjeta,
        vencimiento,
        codigoSeguridad,
        dniTitular
    };
}

function mensajeCompraExito() {
    alert("Compra realizada con Exito! Gracias por tu compra\nObtene tus entradas desde el mail que te enviamos o\ndesde 'Mi cuenta/Entradas'")
}

function restarEntradasSector() {
    switch (sectorSeleccionado) {
        case "A":
            shows[showSeleccionado].entradasSectorA -= cantidadEntradasSeleccionadas
            break;
        case "B":
            shows[showSeleccionado].entradasSectorB -= cantidadEntradasSeleccionadas
            break;
        case "C":
            shows[showSeleccionado].entradasSectorC -= cantidadEntradasSeleccionadas
            break;
        case "D":
            shows[showSeleccionado].entradasSectorD -= cantidadEntradasSeleccionadas
            break;
        default:
            break;
    }
}

function simulacion() {
    seleccionShow()
    seleccionCantidadEntradas()
    seleccionarSector()
    seleccionarMetodoPago()
}

simulacion()