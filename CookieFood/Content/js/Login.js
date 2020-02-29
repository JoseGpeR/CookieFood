function CierraSesion() {
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.get('/Home/LogOut').done(function (data) {
        document.location.href = "/Home/PanelLogin";
    });
}

function Login() {
    var screen = $('#loading-screen');
    configureLoadingScreen(screen);
    $.post('/Home/Login', { username: $('#WIW').val(), psw: $('#PSW').val() }).done(function (data) {
        if (data == "NO") {
            ToastIncorrect();
        } else {
            document.location.href = '/Home/Principal'
        }
    });

}