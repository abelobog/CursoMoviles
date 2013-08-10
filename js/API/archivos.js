//Archivos
function subirFoto(foto, nom) {

    var options = new FileUploadOptions();
    options.fileKey = "archivo";
    options.fileName = "Abelino";//fileURI.substr(fileURI.lastIndexOf('/') + 1);
    //options.mimeType = "text/plain";

    /*var params = {};
    params.value1 = "test";
    params.value2 = "param";

    options.params = params;
    */
    
    var ft = new FileTransfer(); //se crea una instancia
    ft.upload(foto, "http://igitsoft.com/pgtest.php", function (r) {
        //console.log("Code = " + r.responseCode);
        //console.log("Response = " + r.response);
        if (r.response == 1) {
            navigator.notification.confirm('Datos subidos Correctamente', function (btn) {
                switch (btn) {
                    case 1:
                        navigator.notification.vibrate(500);
                        break;
                    case 2:
                        navigator.notification.beep(2);
                        break;
                }
                crearUsuario(nom,disp()['id']);
                window.location.href = '#page';
            }, 'Confirmación', 'Vibrar, Beep, Cancelar');
        } else {
            navigator.notification.alert('Error al subir foto', null, 'Error', 'Aceptar');
        //console.log("Sent = " + r.bytesSent);
    } , function (error) {
        alert("An error has occurred: Code = " + error.code);
        //console.log("upload error source " + error.source);
        //console.log("upload error target " + error.target);
    }, options);
}