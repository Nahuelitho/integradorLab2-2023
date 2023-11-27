
// reescribe la ruta del formulario a la que es enviada la informacion con el attributo action.

  function elegir(selector){
    var ruta = selector.value;
    document.getElementById("formulario").action = ruta;
    console.log(ruta)
    if  (selector.value == "paciente"){
      document.getElementById("adicional").innerHTML = `
        <label for="embarazada"> Embarazo: </label>
        <input id="embarazada", name="embarazada" type="checkbox", value= 1>  </input>
      `

    }/* else if (selector.value == "paciente"){
      document.getElementById("adicional").innerHTML = `
        <label for"embarazada"> Embarazo: </label>
        <input id="embarazada", name="embarazada" type="checkbox", value= 1 >   </input>
      `
    } */
  };
  // codigo pug para el selector de roles
/*   div(id="adicional")
            select(id="selectorTipoPersona",name="selectPersona", onchange="elegir(this)" required)
                option(disabled selected) Elija Rol
                option(value="paciente") Paciente
                option(value="tecnico") Tecnico 
                option(value="bioquimico") Bioquimico
                option(value="secretaria") Secretaria */
