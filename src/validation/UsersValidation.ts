class UserValidation {
  static validateEmail(email: string): boolean {
    const validarEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validarEmail.test(email);
  }

  static validateCEP(cep: string): boolean {
    const validarCEP = /^[0-9]{5}-[0-9]{3}$/;
    return validarCEP.test(cep);
  }

  static validatePhone(telefone: string): boolean {
    const formatTelefone = /^\(\d{2}\) \d{5}-\d{4}$/;
    return telefone.match(formatTelefone) !== null;
  }
}

console.log(UserValidation.validateEmail("example@email.com"));
console.log(UserValidation.validateCEP("12345-678"));
console.log(UserValidation.validatePhone("(12) 34567-8910"));
console.log(UserValidation.validatePhone("12-34567-8910"));


export { UserValidation };