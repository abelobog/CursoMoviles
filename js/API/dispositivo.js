//dispositivo
function disp() {
    //var arr = new Array();
    var arr = [];
    arr['name'] = device.name;
    arr['phonegap'] = device.cordoba;
    arr['platform'] = device.platform;
    arr['id'] = device.uuid;
    arr['version'] = device.version;
    arr['model'] = device.model
    
    return arr;
}