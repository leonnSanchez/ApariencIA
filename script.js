document.addEventListener("DOMContentLoaded", function() {
    const rectArriba = document.querySelector('.arriba');
    const rectAbajo = document.querySelector('.abajo');
    const fondoDespues = document.querySelector('.fondo-despues');
    const pantallaNueva = document.querySelector('.pantalla-nueva');
    
    let primeraVez = true;  // Control para la primera y segunda vez
  
    document.body.addEventListener('click', function() {
      if (primeraVez) {
        // Primer clic: mover los rectángulos y mostrar el mensaje de bienvenida
        rectArriba.classList.add('mover-arriba');
        rectAbajo.classList.add('mover-abajo');
        
        fondoDespues.classList.add('visible'); // Mostrar el mensaje de bienvenida
        primeraVez = false;
      } else {
        // Segundo clic: mover los rectángulos hacia arriba
        rectArriba.classList.add('mover-arriba');
        rectAbajo.classList.add('mover-abajo');
        
        fondoDespues.classList.remove('visible'); // Ocultar el mensaje de bienvenida
        
        // Cambiar el fondo del body a color beige
        document.body.style.backgroundColor = "#f5f5dc"; // Beige
        
        // Mostrar la nueva pantalla después de un retraso
        setTimeout(function() {
          pantallaNueva.classList.add('visible');  // Hacer que la pantalla naranja aparezca lentamente
        }, 1000); // Espera 1 segundo para que termine la animación de los rectángulos
      }
    });
  });
  