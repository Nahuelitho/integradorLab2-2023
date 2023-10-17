export function obtenerPersona(){
    var nombre = document.getElementById("nombre").value,
    apellido = document.querySelector("#apellido").value,
    dni = document.querySelector("#dni").value,
    mail = document.querySelector("#mail").value,
    sexo = document.querySelector("#sexo").value,
    fechaNacimiento = document.querySelector("#fechaNacimiento").value,
    domicilio = document.querySelector("#domicilio").value,
    provincia = document.querySelector("#provincia").value,
    localidad = document.querySelector("#localidad").value,
    obraSocial = document.querySelector("#obraSocial").value,
    numeroAfiliado = document.querySelector("#numeroAfiliado").value,
    user = document.querySelector("#user").value,
    password = document.querySelector("#password").value;
    
    console.log(numeroAfiliado)
    var Persona = {
        nombre: nombre,
        apellido: apellido,
        dni: dni,
        mail: mail,
        sexo: sexo,
        fechaNacimiento: fechaNacimiento,
        domicilio: domicilio,
        provincia: provincia,
        localidad: localidad,
        obraSocial: obraSocial,
        numeroAfiliado: numeroAfiliado,
        user: user,
        password: password
    };
    return Persona
    
};









/* var select = document.getElementById('provincia');
select.addEventListener('change',
  function(){
    var selectedOption = this.options[select.selectedIndex];
    console.log(selectedOption.value + ': ' + selectedOption.text);
  }); */