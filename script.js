const enlaces = document.getElementsByClassName('toolbar');
const resultado = document.getElementById('resultado');
const INICIO= document.getElementById("Inicio");
const SERVICIOS = document.getElementsByClassName('dropdown-content/');

// Agregar eventos de clic a todos los enlaces
for (let i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', function(event) {
    resultado.innerHTML = ''
    switch (i) {
        case 0:
            INICIO.style.display='block';
            break;
        case 1:
            resultado.innerHTML='<h1>Acerca de nosotros</h1><p>Para que nos conozcas!</p>'
            INICIO.style.display='none';
            break;
        case 2:
        resultado.innerHTML='<h1>Contacto</h1><p>Contacta con nosotros!</p><p>0987234234</p>'
        INICIO.style.display='none';
            break;
        default:
            break;
    }
  });
}
for (let i = 0; i < SERVICIOS.length; i++) {
    SERVICIOS[i].addEventListener('click', function(event) {
      resultado.innerHTML = ''
      switch (i) {
          case 0:
            resultado.innerHTML='<h1>servicio 1</h1>'
            INICIO.style.display='none';
              break;
          case 1:
              resultado.innerHTML='<h1>servicio 2</h1>'
              INICIO.style.display='none';
              break;
          case 2:
          resultado.innerHTML='<h1>servicio 3</h1>'
          INICIO.style.display='none';
              break;
          default:
              break;
      }
    });
  }

