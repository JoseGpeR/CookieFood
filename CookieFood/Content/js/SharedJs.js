function configureLoadingScreen(screen) {
    $(document)
        .ajaxStart(function () {
            screen.fadeIn();
        })
        .ajaxStop(function () {
            screen.fadeOut();
        });
}
//TOAST
function Toasts(id) {
    var x = document.getElementById(id);
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}


function MuestraToast() {
    var x = document.getElementById("toast");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastInicio() {
    var x = document.getElementById("toastInicio");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastIncorrect() {
    var x = document.getElementById("toastIncorrect");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastInsercción() {
    var x = document.getElementById("toastInsert");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastUserDelete() {
    var x = document.getElementById("ToastUserDelete");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastUserAdd() {
    var x = document.getElementById("ToastUserAdd");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastError() {
    var x = document.getElementById("toastError");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastErrorFatal() {
    var x = document.getElementById("ToastErrorFatal");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastIncompletForm() {
    var x = document.getElementById("ToastIncompletForm");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastNullInformation() {
    var x = document.getElementById("ToastNullInformation");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastFaltaFirma() {
    var x = document.getElementById("ToastFaltaFirma");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastFirmaCorrecta() {
    var x = document.getElementById("ToastFirmaCorrecta");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}
function ToastIncorrectFirma() {
    var x = document.getElementById("toastIncorrectfirma");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 4000);
}


//*********** MUESTRA DE PANELES **************//
function MuestraPaneles(url) {
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get(url).done(function (result) {
        $('#Content').empty();
        $('#Content').html(result);
    });
}