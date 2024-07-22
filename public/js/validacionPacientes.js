const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const selects = document.querySelectorAll('#formulario select');
const dniPersonas = [];
const expresiones = {
    nombre: /^[A-Za-zÑñÁáÉéÍíÓóÚú]{1,30}\s*?([A-Za-zÑñÁáÉéÍíÓóÚú]{1,30}\s*?)([A-Za-zÑñÁáÉéÍíÓóÚú]{1,30})?$/,   // formato de la A a la Z y pueden llevar acento.
    apellido: /^[A-Za-zÑñÁáÉéÍíÓóÚú]{1,30}\s*?([A-Za-zÑñÁáÉéÍíÓóÚú]{1,30})?$/ , // formato de la A a la Z y pueden llevar acento.
    dni: /^[0-9]{7,8}$/ ,                          // 7 a 8 digitos del 0 al 9.
    obraSocial: /^[A-Za-zÑñÁáÉéÍíÓóÚú]{1,30}\s*?([A-Za-zÑñÁáÉéÍíÓóÚú]{1,30})?$/, // formato de la A a la Z y pueden llevar acento.
    diagnostico: /^[A-Za-zÑñÁáÉéÍíÓóÚú]{1,30}\s*?([A-Za-zÑñÁáÉéÍíÓóÚú]{1,30}\s*?)([A-Za-zÑñÁáÉéÍíÓóÚú]{1,30})?$/,   // formato de la A a la Z y pueden llevar acento.
    telefono: /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/, // elimina todo lo que no sea numero opcionales el +54, 0 15 y 4.
    usuario: /^[a-z0-9_-]{3,20}$/, // formato numeros letras y guiones 3 a 16 caracteres
    email: /^\w+([./\-_+/]*?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, // formato example_ex09@example.com
    domicilio: /^([\w+\s+\w]{3,40})\w$/, //formato numeros, letras y de 3 a 40 caracteres
    numeroAfiliado: /[0-9]{3}[\-][0-9]{7,8}[\-][0-9]{2}/, //formato 123-37298256-01
    contraseña: /^[a-z0-9]{6,20}$/ // 6 a 20 digitos entre numeros y letras.

}
const resultados = {
    nombre: false,
    apellido: false,
    dni: false,
    telefono: false,
    email: false,
    fechaNacimiento: false,
    domicilio: false,
    obraSocial: false,
    diagnostico: false,
    numeroAfiliado: false,
    user: false,
    password: false
}
const validarFormulario =(e)=>{
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;

        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');  
        break;

        case "dni":
            validarCampo(expresiones.dni, e.target, 'dni');
        break;
        
        case "telefono":
            validarCampo(expresiones.telefono, e.target, 'telefono');
        break;

        case "email":
            validarCampo(expresiones.email, e.target, 'email');
        break;

        case "diagnostico":
            validarCampo(expresiones.diagnostico, e.target, "diagnostico");
        break;

        case "fechaNacimiento": 
            
            validarFecha(e.target.value);
        break;

        case "domicilio":
            validarCampo(expresiones.domicilio, e.target, 'domicilio');
        break;
        
        case "obraSocial":
            validarCampo(expresiones.obraSocial, e.target, 'obraSocial');
        break;

        case "numeroAfiliado":
            validarCampo(expresiones.numeroAfiliado, e.target, 'numeroAfiliado');
        break;

        case "user":
            validarCampo(expresiones.usuario, e.target, 'user');
        break; 

        case "password": 
            validarCampo(expresiones.contraseña, e.target, 'password');
            validarPassword();
        break;

        case "password2":
            validarPassword();
        break;



    }
}
inputs.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})
selects.forEach((select)=>{
    //select.addEventListener('keyup', validarFormulario);
    select.addEventListener('blur', validarFormulario);
})


const validarFecha = (input)=>{
    const fechaHoy = new Date();
    var fecha = new Date(input) ;
    if(fecha <= fechaHoy){
        document.getElementById(`grupo__fechaNacimiento`).classList.add('formulario__grupo-correcto')
        document.getElementById(`grupo__fechaNacimiento`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__fechaNacimiento .formulario__input-error`).classList.remove('formulario__input-error-activo');
        resultados.fechaNacimiento = true;
    }else{
        document.getElementById(`grupo__fechaNacimiento`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__fechaNacimiento`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__fechaNacimiento .formulario__input-error`).classList.add('formulario__input-error-activo');
        resultados.fechaNacimiento = false;
    }


}

const validarPassword=()=>{
    const inputPass1 = document.getElementById('password');
    const inputPass2 = document.getElementById('password2');
    if(inputPass1.value == null){
        document.getElementById(`grupo__password`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__password i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__password .formulario__input-error`).classList.add('formulario__input-error-activo');
        resultados.password = false;
    }
    if(inputPass1.value !== inputPass2.value){
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__password2 .formulario__input-error-2`).classList.add('formulario__input-error-2-activo');
        resultados.password = false;
    }else{
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__password2 i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__password2 .formulario__input-error-2`).classList.remove('formulario__input-error-2-activo');
        resultados.password = true;
    }
}

const validarCampo = (expresion, input, campo)=>{
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-check');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        resultados.campo = true;
    }else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-circle-xmark');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-circle-check');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        resultados.campo = false;
    }
}


formulario.addEventListener('submit', (e)=>{
    // 
    if(resultados.nombre && resultados.apellido && resultados.dni && resultados.telefono && resultados.email 
        && resultados.fechaNacimiento && resultados.domicilio && resultados.obraSocial && resultados.numeroAfiliado 
        && resultados.user && resultados.password) {
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
        setTimeout(() => {
            formulario.reset()
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
        }, 5000);
    } else {
       // e.preventDefault();
        console.log('fallo la carga..')
        
    }

})

