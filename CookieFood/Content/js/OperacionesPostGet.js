function BuscaTeam() {
    var url = '/EscanerQr/BuscaTeam';
    var codeteam = document.getElementById("inputCodigo").value;
    var data = { codeteam: codeteam };
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get(url, data).done(function (data) {
        if (data.length == 0) {
            document.getElementById("tablaDatosTeam").style.display = "none";
            document.getElementById("inputCodigo").value = "";
            document.getElementById("auditorias").style.display = "none";
            ToastError();
        } else {
            var screen = $('#loading-screen');
            configureLoadingScreen(screen);
            document.getElementById("tablaDatosTeam").style.display = "block";
            document.getElementById("labelArea").innerHTML = data[0];
            document.getElementById("labelDesc").innerHTML = data[1];
            document.getElementById("labelTeam").innerHTML = data[2];
            Closes();
            document.getElementById("inputCodigo").value = "";
            document.getElementById("auditorias").style.display = "block";
            AuditTLRepeat();
        }


    }).fail();
}
    function BuscaAuditoriasSemanales() {
        var url = '/AuditoriaDTL/BuscaAuditoriasSemanales';
        var data = { codeteam: "202", semana: 4 };
        var screen = $('#loading-screen');
        configureLoadingScreen(screen);
        $.get(url, data).done(function (data) {
            console.log(data);


        }).fail();
    }
function manejarErrorAjax(err) {
    
}

function configureLoadingScreen(screen) {
    $(document)
        .ajaxStart(function () {
            screen.fadeIn();
        })
        .ajaxStop(function () {
            screen.fadeOut();
        });
}

var url = "/AuditoriaDTL/Save";
function CargaDatos(turno, cadena) {
    var f = new Date();
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            IdArea: document.getElementById("labelArea").innerHTML,
            CODEAUDITORIA: "DTL",
            NOMBREAUDITORIA: "DAILY TL",
            FECHA: (fechaActual()),
            TEAM: document.getElementById("labelTeam").innerHTML,
            SEMANA: (ObtenerSemana()),
            MES: ((f.getMonth() + 1)),
            AÑO: (f.getFullYear()),
            SCOREDIARIO: document.getElementById(("labelScore" + cadena)).innerHTML,
            TURNO: turno,
            FIRMA: ArregloConFirma[0],

            P1: ArregloConCalificaciones[0],
            P2: ArregloConCalificaciones[1],
            P3: ArregloConCalificaciones[2],
            P4: ArregloConCalificaciones[3],
            P5: ArregloConCalificaciones[4],
            P6: ArregloConCalificaciones[5],
            P7: ArregloConCalificaciones[6],
            P8: ArregloConCalificaciones[7],
            P9: ArregloConCalificaciones[8],
            P10: ArregloConCalificaciones[9],
            P11: ArregloConCalificaciones[10],
            P12: ArregloConCalificaciones[11],

            C1: ArregloConComentarios[0],
            C2: ArregloConComentarios[1],
            C3: ArregloConComentarios[2],
            C4: ArregloConComentarios[3],
            C5: ArregloConComentarios[4],
            C6: ArregloConComentarios[5],
            C7: ArregloConComentarios[6],
            C8: ArregloConComentarios[7],
            C9: ArregloConComentarios[8],
            C10: ArregloConComentarios[9],
            C11: ArregloConComentarios[10],
            C12: ArregloConComentarios[11]

        }),
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.ok)
            return response.text()
        else
            alert("Error al ejecutar :(")
    }).then(function (Data) {
        if (Data != "1") {
            alert(Data)
        } else {
            AuditTLRepeat();
            limpiar(turno);
            arreglo[19] = "NO";
            ToastInsercción();
        }
    })
}

function OcultaAudits(resultado) {
    if (resultado == "A") {
        document.getElementById("GA").style.display = "none";
    }
    if (resultado == "B") {
        document.getElementById("GB").style.display = "none";
    }
    if (resultado == "C") {
        document.getElementById("GC").style.display = "none";
    }
}

function AuditTLRepeat() {
    var url = '/AuditoriaDTL/BuscaAuditorias';
    var codeteam = document.getElementById("labelTeam").innerHTML;
    var data = { codeteam: codeteam, fecha: (fechaActual()) };
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get(url, data).done(function (data) {
        if (data.length == 0) {
            document.getElementById("GA").style.display = "block";
            document.getElementById("GB").style.display = "block";
            document.getElementById("GC").style.display = "block";
        } else {
            for (var i = 1; i <= data.length; i++) {
                var id = data[i - 1].grupo;
                document.getElementById("G" + id).style.display = "none";
            }
        }
    }).fail(manejarErrorAjax());

    var urlSemanal = '/AuditoriaWTL/BuscaAuditoriasSemanales';
    var data = { codeteam: codeteam, semana: (ObtenerSemana()) };
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get(urlSemanal, data).done(function (data) {
        if (data.length == 0) {
            document.getElementById("GAS").style.display = "block";
            document.getElementById("GBS").style.display = "block";
            document.getElementById("GCS").style.display = "block";
        } else {
            for (var i = 1; i <= data.length; i++) {
                var id = data[i - 1].grupo;
                document.getElementById("G" + id + "S").style.display = "none";
            }
        }


    }).fail();
}

function CargaDatos(turno, cadena) {
    var url = "/AuditoriaDTL/Save";
    var f = new Date();
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            IdArea: document.getElementById("labelArea").innerHTML,
            CODEAUDITORIA: "DTL",
            NOMBREAUDITORIA: "DAILY TL",
            FECHA: (fechaActual()),
            TEAM: document.getElementById("labelTeam").innerHTML,
            SEMANA: (ObtenerSemana()),
            MES: ((f.getMonth() + 1)),
            AÑO: (f.getFullYear()),
            SCOREDIARIO: document.getElementById(("labelScore" + cadena)).innerHTML,
            TURNO: turno,
            FIRMA: ArregloConFirma,

            P1: ArregloConCalificaciones[0],
            P2: ArregloConCalificaciones[1],
            P3: ArregloConCalificaciones[2],
            P4: ArregloConCalificaciones[3],
            P5: ArregloConCalificaciones[4],
            P6: ArregloConCalificaciones[5],
            P7: ArregloConCalificaciones[6],
            P8: ArregloConCalificaciones[7],
            P9: ArregloConCalificaciones[8],
            P10: ArregloConCalificaciones[9],
            P11: ArregloConCalificaciones[10],
            P12: ArregloConCalificaciones[11],

            C1: ArregloConComentarios[0],
            C2: ArregloConComentarios[1],
            C3: ArregloConComentarios[2],
            C4: ArregloConComentarios[3],
            C5: ArregloConComentarios[4],
            C6: ArregloConComentarios[5],
            C7: ArregloConComentarios[6],
            C8: ArregloConComentarios[7],
            C9: ArregloConComentarios[8],
            C10: ArregloConComentarios[9],
            C11: ArregloConComentarios[10],
            C12: ArregloConComentarios[11]

        }),
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.ok)
            return response.text()
        else
            alert("Error al ejecutar :(")
    }).then(function (Data) {
        if (Data != "1") {
            alert(Data)
        } else {
            ArregloConFirma = [];
            AuditTLRepeat();
            limpiar(turno, "DTL");
            ToastInsercción();
        }
    })
}
console.log("x");
function CargaDatosSemanales(grupo, cadena) {
    var urlSEMANA = "/AuditoriaWTL/Save";
    var f = new Date();
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    fetch(urlSEMANA, {
        method: "POST",
        body: JSON.stringify({
            IdArea: document.getElementById("labelArea").innerHTML,
            CODEAUDITORIA: "WTL",
            NOMBREAUDITORIA: "Week TL",
            FECHA: (fechaActual()),
            TEAM: document.getElementById("labelTeam").innerHTML,
            SEMANA: (ObtenerSemana()),
            MES: ((f.getMonth() + 1)),
            AÑO: (f.getFullYear()),
            SCORESEMANAL: document.getElementById(("labelScoreWeek" + cadena)).innerHTML,
            TURNO: grupo,
            FIRMA: ArregloConFirmaSemanal,

            P1: ArregloConCalificacionesSemanal[0],
            P2: ArregloConCalificacionesSemanal[1],
            P3: ArregloConCalificacionesSemanal[2],
            P4: ArregloConCalificacionesSemanal[3],
            P5: ArregloConCalificacionesSemanal[4],
            P6: ArregloConCalificacionesSemanal[5],
            P7: ArregloConCalificacionesSemanal[6],
            P8: ArregloConCalificacionesSemanal[7],

            C1: ArregloConComentariosSemanal[0],
            C2: ArregloConComentariosSemanal[1],
            C3: ArregloConComentariosSemanal[2],
            C4: ArregloConComentariosSemanal[3],
            C5: ArregloConComentariosSemanal[4],
            C6: ArregloConComentariosSemanal[5],
            C7: ArregloConComentariosSemanal[6],
            C8: ArregloConComentariosSemanal[7]

        }),
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        if (response.ok)
            return response.text()
        else
            alert("Error al ejecutar :(")
    }).then(function (Data) {
        if (Data != "1") {
            alert(Data)
        } else {
            ArregloConFirmaSemanal = [];
            AuditTLRepeat();
            limpiar(grupo, "Week");
            ToastInsercción();
        }
    })
}