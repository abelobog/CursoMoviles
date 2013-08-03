function subdirDatos(nom,email,tel,foto){
	$.ajax({
		type: "POST",
		url: "some.php",
		data: { name: "John", location: "Boston" }
	}).done(function( msg ) {
		if (msg = 1) {
		navigator.notification.confirm('Datos subidos correctamente',function(btn){
		switch(btn){
    		case 1: {
    			navigator.notification.vibrate(500);
    			break;
    			}
    		case 2: {
    			navigator.notification.beep(2);
    			break;
    			}
    	}														
		},'Confirmación','Vibrar, Beep, Cancelar');
		}else {
			navigator.notification.alert('Error al procesar datos',null,'Error','Aceptar');
		}
	});
}