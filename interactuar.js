//jQuery para cuando se cargue el DOM
 $(document).ready(function(){
  // Mostrar el contenidom, quitando la clase que lo esconde
  $('body').fadeIn(2000).removeClass('hidden');
  var d = new Date();
  // Ver lo asignado a la variable d en la consola de javascript
  console.log(d);
  // Crear dos variables, una con días y otra con meses
  var days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];
  var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre","diciembre"];
  // Obtener el día de la semana con un número entre 0 y 6
  var the_day = d.getDay();
  // Obtener el mes del año con un número entre 0 y 11
  var the_month = d.getMonth();
  // Crear una variable con el día que corresponda a la posición según número entre 0 y 6
  var today = days[the_day];
  // Crear una variable con el mes que corresponda a la posición según número entre 0 y 11
  var month = months[the_month]
  // Crear un contenido que será incluido entre etiquetas small
  $("small").html('Hoy es ' + today + ' ' + d.getDate() + ' de ' + month + ', ' + d.getFullYear());
  // Crear función que se ejecute con el envío de lo que se ingrese al formulario
  $('form').submit(function(){
     var datos = $(this).serializeArray();
     console.log(datos);
     $("#denominacion").html("Hola " + datos[0]["value"] + " " + datos[1]["value"]);
     var edad = datos[2]["value"];
     if(edad < 30){
      //Indigo
      $('body').css("background-color","#d1d9ff");
      $('#footer').css("background-color","#9fa8da");
      $('form input[type="submit"]').css("background-color","#6f79a8");
      var anualidad;
      if (edad == 29){ anualidad = " año "} else {anualidad = " años "}
      frase = " ¿Sabías que eres " + (30-edad) + anualidad + "menor que la <a href=\"https://www.google.com/doodles/30th-anniversary-of-the-world-wide-web\" target=\"_blank\">Web</a>?";
     } else if(edad == 30){
      //Pink
      $('body').css("background-color","#ff94c2");
      $('#footer').css("background-color","#f06292");
      $('form input[type="submit"]').css("background-color","#ba2d65");
       frase = " ¿Sabías que tienes la misma edad que la <a href=\"https://www.google.com/doodles/30th-anniversary-of-the-world-wide-web\" target=\"_blank\">Web</a>?";     
     } else {
      //Brown
      $('body').css("background-color","#efdcd5");            
      $('#footer').css("background-color","#bcaaa4");
      $('form input[type="submit"]').css("background-color","#8c7b75");      
      var anualidad;
      if (edad == 31){ anualidad = " año "} else {anualidad = " años "}
      frase = " ¿Sabías que eres " + (edad-30) + anualidad + "mayor que la <a href=\"https://www.google.com/doodles/30th-anniversary-of-the-world-wide-web\" target=\"_blank\">Web</a>?";
     }
     var frase;
     $("#envejecimiento").html(frase);     
     return false;
   });
 });