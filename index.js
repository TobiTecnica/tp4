/*Diseñar un programa que tenga que dada la fecha del sistema del sistema. 
Calcular: 
 cantidad de días que falta para año nuevo con una función llamada CantidaddiasAnioNuevo($fecha)
 cantidad de meses que la selección Argentina es campeona del mundo una función llamada CantidadMesesCampeon($fecha)
Cantidad de años de tu nacimiento con una función llamada CantidadAniosNacimiento($fecha)*/

function CantidaddiasAnioNuevo(fecha) {
    var fecha_actual = new Date(fecha);
    
    var anio_actual = fecha_actual.getFullYear();
    
    var fecha_anio_nuevo = new Date(anio_actual + 1, 0, 1);
    
    var diferencia_ms = fecha_anio_nuevo - fecha_actual;
    
    var dias_faltantes = Math.ceil(diferencia_ms / (1000 * 60 * 60 * 24));
    
    return dias_faltantes;
}

function CantidadMesesCampeon(fecha) {
    var fecha_campeonato = new Date(2018,12, 22); 
    
    var fecha_actual = new Date(fecha);
    
    var diferencia_meses = (fecha_actual.getFullYear() - fecha_campeonato.getFullYear()) * 12;
    diferencia_meses -= fecha_campeonato.getMonth();
    diferencia_meses += fecha_actual.getMonth();
    
    return diferencia_meses;
}

function CantidadAniosNacimiento(fecha) {
    var fecha_nacimiento = new Date(fecha);
    
    var anio_nacimiento = fecha_nacimiento.getFullYear();
    
    var anio_actual = new Date().getFullYear();
    
    var diferencia_anios = anio_actual - anio_nacimiento;
    
    return diferencia_anios;
}

var fecha_actual = new Date(); 

console.log("Días que faltan para Año Nuevo:", CantidaddiasAnioNuevo(fecha_actual));
console.log("Meses que Argentina es campeón del mundo:", CantidadMesesCampeon(fecha_actual));
console.log("Años desde tu nacimiento:", CantidadAniosNacimiento("2005-09-28")); 