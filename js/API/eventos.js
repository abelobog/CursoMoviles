//Eventos
$(document).ready(function(){
	document.addEventListener("deviceready", function(){
		window.location.href = "#login";
		$('#regSend').click(function(){
			var nom = $('#regNom').val();
			var mail = $('#regEmail').val();
			var tel = $('#regTel').val();
			
			if(nom != '' && mail != '' && tel != ''){
				navigator.notification.alert(nom+'\n'+mail+'\n'+tel, null, 'Hotel','Bienvenido');
			}else{
				navigator.notification.alert('Todos los campos son requeridos', null, 'Registro','Aceptar');
			}
		});
		$('#regFoto').tap(function(){
			tomarFoto();
		});
	}, false);
});