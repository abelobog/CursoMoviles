//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
        if (!isLogin())
            window.location.href = "#login";
		$('#regSend').tap(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
            var foto = $('#regFoto').attr('rel');
			
			if(nom != '' && mail != '' && tel != '' && foto != undefined && foto != ''){
				subirDatos(nom,mail,tel,foto);
			}else{
				navigator.notification.alert('Todos los campos son requeridos', null, 'Registro','Aceptar');
			}
		});
        $('#regFoto').tap(function(){
            tomarFoto();
        });
	}, false);
});