funtion tomarFoto(){

navigator.device.capture.captureImage(
    function foto(foto){
    	for(i=0;i<foto.length;i++){
    		ruta = foto[i].fullPath; //indica la dirección o la ruta donde se guarda la imagen
    	}
    	$('#regFoto').attr('rel',ruta);
    	$('#mostrar').html('<img src="'+ruta+'"> width="200"/>');
    	}, 
    function (err){
    	navigator.notification.aler('Error: '+err.code,null,'No capturado','Aceptar');
    }, 
    { limit: 2});

}