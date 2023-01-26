import { UserController } from '../controllers/UserController'


class UserValidation {


function validateEmail(email) {

  var validarEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;   
  
  return validarEmail.test(email);
}

  if (validateEmail("example@email.com")) {

    console.log("Email Válido");
    }else {

    console.log("Email Inválido");
    }

  function validateCEP(cep) {

      var validarCEP = /^[0-9]{5}-[0-9]{3}$/;
    
      return validarCEP.test(cep);
    }
    function validatePhone(telefone) {
      
      var formatTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;

      return telefone.match(formatTelefone);
    }
    
    console.log(validatePhone("(12) 34567-8910"));

    console.log(validatePhone("12-34567-8910")); 
}

export { UserValidation };
