
//funcion para actualizar la tabla del personal.
  function enviarFormulario(ruta) { 
    const formulario = document.getElementById('actualizarTabla');
     const parametros = new URLSearchParams(new FormData(formulario)).toString();
      window.location.href = `/${ruta}?`;
  }
  // ${parametros}