window.addEventListener('scroll', () => 
{
    document.querySelectorAll('section').forEach(seccion => {
      const posicion = seccion.getBoundingClientRect().top;
      const alturaPantalla = window.innerHeight / 1.3;
  
      if (posicion < alturaPantalla) 
      {
        seccion.classList.add('aparecer');
      }
    });
  });