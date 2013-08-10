function subirDatos(nom, email, tel, foto){
    $.ajax({
        type: "POST",
        url: "http://igitsoft.com/pgtest.php",
        data: 'nom='+nom+'&mai='+email+'&tel='+tel
    }).done(function(msg) {
        if(msg==1){
            /*navigator.notification.confirm('Datos subidos Correctamente', function(btn){
                switch(btn){
                    case 1:
                        navigator.notification.vibrate(500);
                        break;
                    case 2:
                        navigator.notification.beep(2);
                        break;
                }
            },'Confirmación','Vibrar, Beep, Cancelar');
            */
            subirFoto(foto, nom);
        }else{
            navigator.notification.alert('Error al Procesar Datos', null, 'Error','Aceptar');
        }
    });
}