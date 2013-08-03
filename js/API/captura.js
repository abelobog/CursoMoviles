//Captura
function tomarFoto(){
    navigator.device.capture.captureImage(function(foto){
        for(i=0;i<foto.length;i++){
            ruta = foto[i].fullPath;
        }
        $('#regFoto').attr('rel',ruta);
        $('#mostrar').html('<img src="'+ruta+'" width="200" />');
    }, function(err){
        navigator.notification.alert('Error: '+err.code,null,'No Capturado','Aceptar');
    }, { limit: 2 });
}