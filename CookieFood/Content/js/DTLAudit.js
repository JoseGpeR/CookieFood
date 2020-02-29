$(function () {
    $(".accordion-titulo").click(function (e) {

        e.preventDefault();

        var contenido = $(this).next(".accordion-content");

        if (contenido.css("display") == "none") { //open
            contenido.slideDown(250);
            $(this).addClass("open");
        }
        else { //close
            contenido.slideUp(250);
            $(this).removeClass("open");
        }

    });
});

console.log("x");

function changeColor(x) {
    if (x.style.background == "white") {
        x.style.background = "green";
    }
    else if (x.style.background == "green") {
        x.style.background = "red";
        x.style.color = "white";
        x.style.fontSize = "9px";
        x.style.verticalAlign = "top";
        openpopup();
    } else {
        x.style.background = "white";
        x.innerHTML = "";
    }

    CalificaPT();
    CalificaST();
    CalificaTT();

    return false;
}

function JuntaArranque(x) {
    if (x.style.background == "white") {
        x.style.background = "green";
        x.style.color = "white";
        x.innerHTML = "OK"
    }
    else if (x.style.background == "green") {
        x.style.background = "red";
        x.innerHTML = "NO OK"
    } else {
        x.style.background = "white";
        x.innerHTML = ""
    }
}




var arreglo = [];
var array = [];

function asignarValores(turno) {
    if (turno == 1) {
        for (var i = 1; i <= 18; i++) {
            if (document.getElementById("PTp" + i).style.background == "green") {
                arreglo[(i - 1)] = 100;
            } else {
                arreglo[(i - 1)] = 0;
            }
            
        }
        if (document.getElementById("JAPT").style.background == "green") {
            arreglo[18] = "SÍ";
            array[18] = "SÍ";
        } else if (document.getElementById("JAPT").style.background == "red") {
            arreglo[18] = "NO";
            array[18] = "NO";
        } else {
            arreglo[18] = "";
            array[18] = "";
        }
        for (var i = 1; i <= 18; i++) {
            if (document.getElementById("PTp" + i).style.background == "red") {
                array[(i - 1)] = document.getElementById("PTp" + i).innerHTML;
            } else {
                array[(i - 1)] = "";
            } 
        }
    } else if (turno == 2) {
        for (var i = 1; i <= 18; i++) {
            if (document.getElementById("STp" + i).style.background == "green") {
                arreglo[(i - 1)] = 100;
            } else {
                arreglo[(i - 1)] = 0;
            }
        }

        if (document.getElementById("JAST").style.background == "green") {
            arreglo[18] = "SÍ";
            array[18] = "SÍ";
        } else if (document.getElementById("JAST").style.background == "red") {
            arreglo[18] = "NO";
            array[18] = "NO";
        } else {
            arreglo[18] = "";
            array[18] = "";
        }

        for (var i = 1; i <= 18; i++) {
            if (document.getElementById("STp" + i).style.background == "red") {
                array[(i - 1)] = document.getElementById("STp" + i).innerHTML;
            } else {
                array[(i - 1)] = "";
            }
        }
    } else {
        for (var i = 1; i <= 18; i++) {
            if (document.getElementById("TTp" + i).style.background == "green") {
                arreglo[(i - 1)] = 100;
            } else {
                arreglo[(i - 1)] = 0;
            }
        }

        if (document.getElementById("JATT").style.background == "green") {
            arreglo[18] = "SÍ";
            array[18] = "SÍ";
        } else if (document.getElementById("JATT").style.background == "red") {
            arreglo[18] = "NO";
            array[18] = "NO";
        } else {
            arreglo[18] = "";
            array[18] = "";
        }

        for (var i = 1; i <= 18; i++) {
            if (document.getElementById("TTp" + i).style.background == "red") {
                array[(i - 1)] = document.getElementById("TTp" + i).innerHTML;
            } else {
                array[(i - 1)] = "";
            }
        }
    }

}
function fechaActual() {
    var f = new Date();
    var year = f.getFullYear();
    var mes = (f.getMonth() + 1);
    var dia = f.getDate();

    if (dia < 10) {
        dia = '0' + dia;
    }
    if (mes < 10) {
        mes = '0' + mes;
    }
    var fecha = (year + "-" + mes + "-" + dia)

    return fecha;
}

function ObtenerSemana() {
    var now = new Date(), i = 0, f, sem = (new Date(now.getFullYear(), 0, 1).getDay() > 0) ? 1 : 0;
    while ((f = new Date(now.getFullYear(), 0, ++i)) < now) {
        if (!f.getDay()) {
            sem++;
        }
    }
    return sem;
}
function CalificaPT() {
    contador = 0;
    for (var i = 1; i <= 18; i++) {
        if (document.getElementById("PTp" + i).style.background == "green") {
            contador += 100.00;
        } else {

        }
    }
    cont = 0;
    for (var i = 1; i <= 18; i++) {
        if (document.getElementById("PTp" + i).style.background == "red" || document.getElementById("PTp" + i).style.background == "green") {
            cont += 1;
        } else {

        }
    }

    if (document.getElementById("JAPT").style.background == "red") {
        cont += 1;
    }

    contador = contador / cont;
    document.getElementById("labelScorePT").innerHTML = contador.toFixed(2);
    if (contador < 80) {
        document.getElementById("labelScorePT").style.background = "red";
    } else {
        document.getElementById("labelScorePT").style.background = "green";
    }
}
function CalificaST() {
    contador = 0;
    for (var i = 1; i <= 18; i++) {
        if (document.getElementById("STp" + i).style.background == "green") {
            contador += 100.00;
        } else {

        }
    }

    if (document.getElementById("JAST").style.background == "red") {
        cont += 1;
    }

    cont = 0;
    for (var i = 1; i <= 18; i++) {
        if (document.getElementById("STp" + i).style.background == "red" || document.getElementById("STp" + i).style.background == "green") {
            cont += 1;
        } else {

        }
    }

    contador = contador / cont;

    document.getElementById("labelScoreST").innerHTML = contador.toFixed(2);
    if (contador < 80) {
        document.getElementById("labelScoreST").style.background = "red";
    } else {
        document.getElementById("labelScoreST").style.background = "green";
    }
}
function CalificaTT() {
    contador = 0;
    for (var i = 1; i <= 18; i++) {
        if (document.getElementById("TTp" + i).style.background == "green") {
            contador += 100.00;
        } else {

        }
    }

    if (document.getElementById("JATT").style.background == "red") {
        cont += 1;
    }

    cont = 0;
    for (var i = 1; i <= 18; i++) {
        if (document.getElementById("TTp" + i).style.background == "red" || document.getElementById("TTp" + i).style.background == "green") {
            cont += 1;
        } else {

        }
    }

    contador = contador / cont;


    document.getElementById("labelScoreTT").innerHTML = contador.toFixed(2);
    if (contador < 80) {
        document.getElementById("labelScoreTT").style.background = "red";
    } else {
        document.getElementById("labelScoreTT").style.background = "green";
    }
}





function OpenPopupQr() {
    $('#popupQr').fadeIn('slow');
    $('.popup-overlay').fadeIn('slow');
    $('.popup-overlay').height($(window).height());
    $("#scanner").attr("src", "/Content/js/Scanner.js");
    return false;
}
function Closes() {
    $('#popupQr').fadeOut('slow');
    $('.popup-overlay').fadeOut('slow');
    $("#scanner").attr("src", "");
    return false;
}

function limpiar(turno, tipoAud) {
    if (tipoAud == "DTL") {
        for (var i = 1; i < longitudGA; i++) {
            if (turno == "A") {
                document.getElementById("PTp" + i).style.background = "white";
                document.getElementById("PTp" + i).innerHTML = "";
                document.getElementById("labelScorePT").innerHTML = "";
                document.getElementById("labelScorePT").style.backgroundColor = "white";
            }
            if (turno == "B") {
                document.getElementById("STp" + i).style.background = "white";
                document.getElementById("STp" + i).innerHTML = "";
                document.getElementById("labelScoreST").innerHTML = "";
                document.getElementById("labelScoreST").style.backgroundColor = "white";
            } else {
                document.getElementById("TTp" + i).style.background = "white";
                document.getElementById("TTp" + i).innerHTML = "";
                document.getElementById("labelScoreTT").innerHTML = "";
                document.getElementById("labelScoreTT").style.backgroundColor = "white";
            }
        }
    } else {
        for (var i = 1; i < longitudWGA; i++) {
            if (turno == "A") {
                document.getElementById("WeekPTp" + i).style.background = "white";
                document.getElementById("WeekPTp" + i).innerHTML = "";
                document.getElementById("labelScoreWeekPT").innerHTML = "";
                document.getElementById("labelScoreWeekPT").style.backgroundColor = "white";
            }
            if (turno == "B") {
                document.getElementById("WeekSTp" + i).style.background = "white";
                document.getElementById("WeekSTp" + i).innerHTML = "";
                document.getElementById("labelScoreWeekST").innerHTML = "";
                document.getElementById("labelScoreWeekST").style.backgroundColor = "white";
            } else {
                document.getElementById("WeekTTp" + i).style.background = "white";
                document.getElementById("WeekTTp" + i).innerHTML = "";
                document.getElementById("labelScoreWeekTT").innerHTML = "";
                document.getElementById("labelScoreWeekTT").style.backgroundColor = "white";
            }
        }
    }
    
}

function FirmaBatch() {
    var batchP = document.getElementById("WIWBatch").value;
    var urlSemanal = '/AuditoriaDTL/Batch_login';
    var data = { batchP: batchP };
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get(urlSemanal, data).done(function (data) {
        if (data != 0 || data != "") {
            if (TipoAud == "DTL") {
                ArregloConFirma = data;
                document.getElementById("WIWBatch").value = "";
                closepopupFirma();
                $('#WIWBatch').focus();
                ToastFirmaCorrecta();
            }
            else {
                ArregloConFirmaSemanal = data;
                document.getElementById("WIWBatch").value = "";
                closepopupFirma();
                ToastFirmaCorrecta();
            }
            
        } else {
            ToastErrorFatal();
            document.getElementById("WIWBatch").value = "";
        }
    }).fail();
}
function manejarErrorAjax(err) {
    console.log(err.responseText);
}

function closepopupFirma() {
    $('#popupFirma').fadeOut('slow');
    $('.popup-overlay-firma').fadeOut('slow');
    return false;
}
var TipoAud = "";
function Firmar(tipoAud) {
    $('#popupFirma').fadeIn('slow');
    $('.popup-overlay-firma').fadeIn('slow');
    $('.popup-overlay-firma').height($(window).height());
    TipoAud = tipoAud;
    $('#WIWBatch').focus();
    return false;

}

function traeDescripciones(tipo) {
    var url = '/Descripciones/descripcionesAuditoria';
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get(url).done(function (data) {
        RellenaAud("AudDiaria", data, 'GA', 'P');
        RellenaAud("AudDiariaBoard", data, 'GA', 'P');
        RellenaAudSemanal("AudSemanalCarpeta", data, 'GA', 'P');
        RellenaAud("AudDiaria", data, 'GB', 'S');
        RellenaAud("AudDiariaBoard", data, 'GB', 'S');
        RellenaAudSemanal("AudSemanalCarpeta", data, 'GB', 'S');
        RellenaAud("AudDiaria", data, 'GC', 'T');
        RellenaAud("AudDiariaBoard", data, 'GC', 'T');
        RellenaAudSemanal("AudSemanalCarpeta", data, 'GC', 'T');
    }).fail();
        
}
var longitudGA = 1;
var longitudGB = 1;
var longitudGC = 1;

var longitudWGA = 1;
var longitudWGB = 1;
var longitudWGC = 1;
traeDescripciones("DTL");
function RellenaAudSemanal(tipo, descripciones, grupo, letra) {
    var variable;
    if (tipo == "AudSemanalCarpeta") {
        for (var i = 0; i < descripciones.length; i++) {
            if (descripciones[i].CODEAUDITORIA == "SCTL") {
                $(variable).append($(".grid-container" + tipo + grupo).append("<div style='background-color: #1372d9;' class='grid-item colorFondoRejilla'>" + descripciones[i].ASPECTOAEVALUAR + "</div>"));
                switch (letra) {
                    case 'P':
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + ("Week" + letra + "Tp" + longitudWGA) + "'class='grid-item' style='height:40px;' onclick='cambiaColor(this.id)'></div>"));
                        longitudWGA++;
                        break;
                    case 'S':
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + ("Week" + letra + "Tp" + longitudWGB) + "'class='grid-item' style='height:40px;' onclick='cambiaColor(this.id)'></div>"));
                        longitudWGB++;
                        break;
                    case 'T':
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + ("Week" + letra + "Tp" + longitudWGC) + "'class='grid-item' style='height:40px;' onclick='cambiaColor(this.id)'></div>"));
                        longitudWGC++;
                        break;

                    default:
                }
            }
            
        }
        return variable;
        
        
    }
}

function RellenaAud(tipo, descripciones, grupo, letra) {
    var variable;
    var colores = ["red", "#0e7bee", "#616807", "forestgreen", "grey"];
    if (tipo == "AudDiaria") {
        for (var i = 0; i < descripciones.length; i++) {
            if (descripciones[i].CODEAUDITORIA == "DTL") {
                $(variable).append($(".grid-container" + tipo + grupo).append("<div class='grid-item colorFondoRejilla'>" + descripciones[i].ASPECTOAEVALUAR + "</div>"));
            }
        }

        switch (letra) {
            case 'P':
                for (var i = 0; i < descripciones.length; i++) {
                    if (descripciones[i].CODEAUDITORIA == "DTL") {
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + (letra + "Tp" + (longitudGA)) + "' style='min-height:40px;' class='grid-item' onclick='cambiaColor(this.id)'></div>"));
                        longitudGA++;
                    }
                }
                return variable;
                break;
            case 'S':
                for (var i = 0; i < descripciones.length; i++) {
                    if (descripciones[i].CODEAUDITORIA == "DTL") {
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + (letra + "Tp" + (longitudGB)) + "' style='min-height:40px;' class='grid-item' onclick='cambiaColor(this.id)'></div>"));
                        longitudGB++;
                    }
                }
                return variable;
                break;
            case 'T':
                for (var i = 0; i < descripciones.length; i++) {
                    if (descripciones[i].CODEAUDITORIA == "DTL") {
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + (letra + "Tp" + (longitudGC)) + "' style='min-height:40px;' class='grid-item' onclick='cambiaColor(this.id)'></div>"));
                        longitudGC++;
                    }
                }
                return variable;
                break;
            default:
        }

        
    }
    if (tipo == "AudDiariaBoard") {
        switch (letra) {
            case 'P':
                for (var i = 0; i < descripciones.length; i++) {
                    if (descripciones[i].CODEAUDITORIA == "BDTL") {
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div style='background-color:" + colores[i - 7] + ";' class='grid-item colorFondoRejilla'>" + descripciones[i].ASPECTOAEVALUAR + "</div>"));
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + (letra + "Tp" + longitudGA) + "'class='grid-item' style='min-height:40px;' onclick='cambiaColor(this.id)'></div>"));
                        longitudGA++;
                    }
                }
                return variable;
                break;
            case 'S':
                for (var i = 0; i < descripciones.length; i++) {
                    if (descripciones[i].CODEAUDITORIA == "BDTL") {
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div style='background-color:" + colores[i - 7] + ";' class='grid-item colorFondoRejilla'>" + descripciones[i].ASPECTOAEVALUAR + "</div>"));
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + (letra + "Tp" + longitudGB) + "'class='grid-item' style='min-height:40px;' onclick='cambiaColor(this.id)'></div>"));
                        longitudGB  ++;
                    }
                }
                return variable;
                break;
            case 'T':
                for (var i = 0; i < descripciones.length; i++) {
                    if (descripciones[i].CODEAUDITORIA == "BDTL") {
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div style='background-color:" + colores[i - 7] + ";' class='grid-item colorFondoRejilla'>" + descripciones[i].ASPECTOAEVALUAR + "</div>"));
                        $(variable).append($(".grid-container" + tipo + grupo).append("<div id='" + (letra + "Tp" + longitudGC) + "'class='grid-item' style='min-height:40px;' onclick='cambiaColor(this.id)'></div>"));
                        longitudGC++;
                    }
                }
                return variable;
                break;
            default:
        }
        
    }
    
}
function cambiaColor(id) {
    idGrids = id;
    id = document.getElementById(id);
    if (id.style.background == "white" || id.style.background == "#FFFFFF" || id.style.background == "") {
        id.style.background = "green";
        id.style.fontSize = "15px";
        id.style.verticalAlign = "top";
        $(id).removeClass("fa fa-close");
        $(id).addClass("fa fa-check");
    }
    else if (id.style.background == "green") {
        id.style.background = "red";
        id.style.fontSize = "9px";
        id.style.verticalAlign = "top";
        $(id).removeClass("fa fa-check");
        $(id).addClass("fa fa-close");
        
        openpopup();
    } else {
        $(id).removeClass("fa fa-close");
        id.style.background = "white";
        id.innerHTML = "";
    }
    var letter = idGrids.toString().substring(0, 1);
    switch (letter) {
        case 'P': case 'S': case 'T':
            Calificaciones();
            break;
        case 'W':
            CalificacionesSemanal();
            break;
        default:
    }
}

function CalificacionesSemanal() {
    try {
        var letter = idGrids.toString().substring(5, 4);
        var contador = 0;
        var divisor = 0;
        for (var i = 1; i < longitudWGA; i++) {
            if (document.getElementById("Week" + letter + "Tp" + i).style.background == "green" || document.getElementById("Week" + letter + "Tp" + i).style.background == "black") {
                contador += 100.00;
                divisor++;
            }
            if (document.getElementById("Week" + letter + "Tp" + i).style.background == "red") {
                divisor++;
            }
        }
        contador = contador / divisor;
        document.getElementById("labelScoreWeek" + letter + "T").innerHTML = contador.toFixed(2);
        if (contador < 80) {
            document.getElementById("labelScoreWeek" + letter + "T").style.background = "red";
        } else if (contador >= 80) {
            document.getElementById("labelScoreWeek" + letter + "T").style.background = "green";
        } else {
            document.getElementById("labelScoreWeek" + letter + "T").style.background = "white";
        }
    } catch (e) {

    }
}

function Calificaciones() {
    try {
        var letter = idGrids.toString().substring(0, 1);
        var contador = 0;
        var divisor = 0;
        for (var i = 1; i < longitudGA; i++) {
            if (document.getElementById(letter + "Tp" + i).style.background == "green" || document.getElementById(letter + "Tp" + i).style.background == "black") {
                contador += 100.00;
                divisor++;
            }
            if (document.getElementById(letter + "Tp" + i).style.background == "red") {
                divisor++;
            }
        }
        contador = contador / divisor;
        document.getElementById("labelScore" + letter + "T").innerHTML = contador.toFixed(2);
        if (contador < 80) {
            document.getElementById("labelScore" + letter + "T").style.background = "red";
        } else if (contador >= 80) {
            document.getElementById("labelScore" + letter + "T").style.background = "green";
        } else {
            document.getElementById("labelScore" + letter + "T").style.background = "white";
        }
    } catch (e) {

    }
    
}
var idGrids;
function openpopup() {
    $('#popup').fadeIn('slow');
    $('.popup-overlay-comments').fadeIn('slow');
    $('.popup-overlay-comments').height($(window).height());
    return false;
}
function guardaComentario() {
    var comentario = document.getElementById("textareaPopUp").value;
    document.getElementById(idGrids).innerHTML = comentario;
    closepopup();
}
function closepopup() {
    $('#popup').fadeOut('slow');
    $('.popup-overlay-comments').fadeOut('slow');
    var textareaPopUp = document.getElementById("textareaPopUp");
    textareaPopUp.value = "";
    return false;
}
function eliminaComentario() {
    document.getElementById(idGrids).innerHTML = null;
    document.getElementById(idGrids).style.background = "white";
    Calificaciones();
    closepopup();
}

function NoAplica() {
    document.getElementById(idGrids).innerHTML = "N/A";
    document.getElementById(idGrids).className = "grid-item";
    document.getElementById(idGrids).style.fontSize = "15px";
    document.getElementById(idGrids).style.verticalAlign = "top";
    document.getElementById(idGrids).style.background = "black";
    var letter = idGrids.toString().substring(0, 1);
    switch (letter) {
        case 'P': case 'S': case 'T':
            Calificaciones();
            break;
        case 'W':
            CalificacionesSemanal();
            break;
        default:
    }
    closepopup();
}
var valid = 0;
function ValidaFormilario(grupo, tipoAud) {
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);

    if (tipoAud == "DTL") {
        switch (grupo) {
            case 'A':
                for (var i = 1; i < longitudGA; i++) {
                    if (document.getElementById("PTp" + i).style.background == "white" || document.getElementById("PTp" + i).style.background == "") {
                        valid++; i = 19;
                    }
                }
                if (valid != 0) {
                    ToastIncompletForm();
                    valid = 0;
                } else {
                    GuardaDatos(grupo);
                }
                break;
            case 'B':
                for (var i = 1; i < longitudGB; i++) {
                    if (document.getElementById("STp" + i).style.background == "white" || document.getElementById("STp" + i).style.background == "") {
                        valid++; i = 19;
                    }
                }
                if (valid != 0) {
                    ToastIncompletForm();
                    valid = 0;
                } else {
                    GuardaDatos(grupo);
                }
                break;
            case 'C':
                for (var i = 1; i < longitudGC; i++) {
                    if (document.getElementById("TTp" + i).style.background == "white" || document.getElementById("TTp" + i).style.background == "") {
                        valid++; i = 19;
                    }
                }
                if (valid != 0) {
                    ToastIncompletForm();
                    valid = 0;
                } else {
                    GuardaDatos(grupo);
                }
                break;
            default:
                alert("Error interno, contacte al administrador.");
        }
    } else if (tipoAud == "WTL") {
        switch (grupo) {
            case 'A':
                for (var i = 1; i < longitudWGA; i++) {
                    if (document.getElementById("WeekPTp" + i).style.background == "white" || document.getElementById("WeekPTp" + i).style.background == "") {
                        valid++; i = 19;
                    }
                }
                if (valid != 0) {
                    ToastIncompletForm();
                    valid = 0;
                } else {
                    GuardaDatosSemanales(grupo);
                }
                break;
            case 'B':
                for (var i = 1; i < longitudWGB; i++) {
                    if (document.getElementById("WeekSTp" + i).style.background == "white" || document.getElementById("WeekSTp" + i).style.background == "") {
                        valid++; i = 19;
                    }
                }
                if (valid != 0) {
                    ToastIncompletForm();
                    valid = 0;
                } else {
                    GuardaDatosSemanales(grupo);
                }
                break;
            case 'C':
                for (var i = 1; i < longitudWGC; i++) {
                    if (document.getElementById("WeekTTp" + i).style.background == "white" || document.getElementById("WeekTTp" + i).style.background == "") {
                        valid++; i = 19;
                    }
                }
                if (valid != 0) {
                    ToastIncompletForm();
                    valid = 0;
                } else {
                    GuardaDatosSemanales(grupo);
                }
                break;
            default:
                alert("Error interno, contacte al administrador.");
        }
    }

    
}

function GuardaDatos(grupo) {
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    if (ArregloConFirma.length == 0) {
        ToastFaltaFirma();
    } else {
        switch (grupo) {
            case 'A':
                AsignarVal('P', 'DTL');
                CargaDatos('A', "PT"); valid = 0;
                break;
            case 'B':
                AsignarVal('S', 'DTL');
                CargaDatos('B', "ST"); valid = 0;
                break;
            case 'C':
                AsignarVal('T', 'DTL');
                CargaDatos('C', "TT"); valid = 0;
                break;
            default:
        }
    } 
}
function GuardaDatosSemanales(grupo) {
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    if (ArregloConFirmaSemanal.length == 0) {
        ToastFaltaFirma();
    } else {
        switch (grupo) {
            case 'A':
                AsignarVal('P', 'Week');
                CargaDatosSemanales('A', "PT"); valid = 0;
                break;
            case 'B':
                AsignarVal('S', 'Week');
                CargaDatosSemanales('B', "ST"); valid = 0;
                break;
            case 'C':
                AsignarVal('T', 'Week');
                CargaDatosSemanales('C', "TT"); valid = 0;
                break;
            default:
        }
    }
}
var ArregloConCalificaciones = [];
var ArregloConComentarios = [];
var ArregloConFirma = [];

var ArregloConCalificacionesSemanal = [];
var ArregloConComentariosSemanal = [];
var ArregloConFirmaSemanal = [];



function AsignarVal(grupo, tipoAud) {
    if (tipoAud == "DTL") {
        for (var i = 1; i < longitudGA; i++) {
            if (document.getElementById(grupo + "Tp" + i).style.background == "green" || document.getElementById(grupo + "Tp" + i).style.background == "black") {
                ArregloConCalificaciones[(i - 1)] = 100;
                ArregloConComentarios[(i - 1)] = document.getElementById(grupo + "Tp" + i).innerHTML;
            } else {
                ArregloConCalificaciones[(i - 1)] = 0;
                ArregloConComentarios[(i - 1)] = document.getElementById(grupo + "Tp" + i).innerHTML;
            }
        }
    } else if (tipoAud == "Week") {
        for (var i = 1; i < longitudWGA; i++) {
            if (document.getElementById(tipoAud + grupo + "Tp" + i).style.background == "green" || document.getElementById(tipoAud + grupo + "Tp" + i).style.background == "black") {
                ArregloConCalificacionesSemanal[(i - 1)] = 100;
                ArregloConComentariosSemanal[(i - 1)] = document.getElementById(tipoAud + grupo + "Tp" + i).innerHTML;
            } else {
                ArregloConCalificacionesSemanal[(i - 1)] = 0;
                ArregloConComentariosSemanal[(i - 1)] = document.getElementById(tipoAud + grupo + "Tp" + i).innerHTML;
            }
        }
    }
    
    //console.log(ArregloConCalificacionesSemanal);
    //console.log(ArregloConComentariosSemanal);
}
