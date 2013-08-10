//almacenamiento
function crearUsuario(nombre, did) {
    window.localStorage.setItem('usuario', nombre);
    window.localStorage.setItem('uid', did);
}

function isLogin() {
    if (window.localStorage.getItem('uid') != undefined)
        return true;
    else
        return false;
}