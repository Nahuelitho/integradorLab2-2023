
// reescribe la ruta del formulario a la que es enviada la informacion con el attributo action.

  function elegir(selector){
    var ruta = selector.value;
    document.getElementById("formulario").action = ruta;
    console.log(ruta)
    if  (selector.value == "paciente"){
      document.getElementById("adicional").innerHTML = `
        <label for"embarazada"> Embarazo: </label>
        <input id="embarazada", name="embarazada" type="checkbox", value= 1>  </input>
      `

    }/* else if (selector.value == "paciente"){
      document.getElementById("adicional").innerHTML = `
        <label for"embarazada"> Embarazo: </label>
        <input id="embarazada", name="embarazada" type="checkbox", value= 1 >   </input>
      `
    } */
    
  
    
  };
