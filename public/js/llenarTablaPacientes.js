
  
  $(document).ready(function() {
    
     $('#miTabla').DataTable({
       "language": {
         "url": "https://cdn.datatables.net/plug-ins/1.13.6/i18n/es-ES.json" 
       }
       
     });
   });
  let dataTable ;
  let dataTableInicializado = false;


  function listarPacientes(personas){
    let contenido = ``;
    console.log(personas)
   
    for(i=0; i<personas.length; i++){
      
      contenido += `
      <tr>
        <td> ${personas[i].nombre}  </td>
        <td> ${personas[i].apellido}  </td>
        <td> ${personas[i].dni}  </td>
        <td> ${personas[i].email}  </td>
        <td> ${persona[i].provincia}  </td>
        <td> ${personas[i].domicilio}  </td>
      </tr>`
    };
    document.getElementById("tablaBody").innerHTML = contenido;



  }
  
  window.addEventListener("load", async(personas)=>{
    await listarPacientes(personas);


});