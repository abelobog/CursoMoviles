//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		window.location.href = "#login";
		$('#regSend').click(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			var foto = $('#regFoto').attr('rel');
			
			if(nom != '' && mail != '' && tel != '' && foto != undefined && foto != ''){
				//navigator.notification.alert(nom+'\n'+mail+'\n'+tel, null, 'Hotel','Bienvenido');
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