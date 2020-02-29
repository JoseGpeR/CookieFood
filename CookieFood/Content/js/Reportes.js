function RecibeParametros() {
    var area = document.getElementById("areaSelect").value;
    var fecha = document.getElementById("inputFecha").value;
    var team = document.getElementById("teamSelect").value;
    var codeaudit = document.getElementById("auditoriaSelect").value;
    var turno = document.getElementById("turnoSelect").value;

    if (area == "SELECT" || fecha == "SELECT" || team == "SELECT" || codeaudit == "SELECT" || turno == "SELECT") {
        alert("Por favor, llene todos los filtros");
    } else {
        AsignoParametros(area, fecha, team, codeaudit, turno);
    }

    
}
var Urls = "";

function AsignoParametros(area, fecha, team, codeaudit, turno) {
    var url = '/Reportes/CargaDatos';
    var data = { area: area, fecha: fecha, team: team, codeaudit: codeaudit, turno: turno };
    $.get(url, data).done(function (data) {
        if (data.trim() == '') {
            document.getElementById("tablas").innerHTML = data;
            document.getElementById("cardReporte").style.display = "none";
            ToastNullInformation();
        } else {
            document.getElementById("cardReporte").style.display = "block";
            document.getElementById("tablas").innerHTML = data;
            document.getElementById("botonImprimir").style.display = "block";
            ColoreaReporte();
        }
    }).fail(ToastNullInformation());

}
function manejarErrorAjax(err) {
    alert("¡Error! Favor de contactar al administrador.");
}
function ColoreaReporte() {
    try {
        for (var i = 1; i <= 18; i++) {
            var calificacion = document.getElementById("P" + i).innerHTML;
            if (calificacion == 100) {
                document.getElementById("P" + i).style.background = "green";
                document.getElementById("C" + i).style.background = "green";
            } else {
                document.getElementById("P" + i).style.background = "#ba1f1f";
                document.getElementById("C" + i).style.background = "#ba1f1f";
            }
            document.getElementById("C" + i).style.color = "white";
            document.getElementById("P" + i).style.color = "white";

        }
        if (document.getElementById("labelScoreReport").innerHTML < 80) {
            document.getElementById("labelScoreReport").style.background = "red";
        } else {
            document.getElementById("labelScoreReport").style.background = "green";
        }
    } catch {
        //alert("¡Error! Favor de contactar al administrador.");
    }

}

function ImprimirReporte(nombreDiv) {
    var contenido = document.getElementById(nombreDiv).innerHTML;
    var contenidoOriginal = document.body.innerHTML;

    document.body.innerHTML = contenido;

    window.print();

    document.body.innerHTML = contenidoOriginal;
}

function llenarSelectTeam(area) {
    var url = '/Reportes/llenaSelectTeam';
    var select = document.getElementById("teamSelect");
    var data = { area: area };
    $.get(url, data).done(function (result) {
        for (var i = 0; i < result.length; i++) {
            option = document.createElement("option");
            option.value = result[i];
            option.text = result[i];
            select.appendChild(option);
        }
    }).fail();
}