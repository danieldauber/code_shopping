const messages = {
  required: ':name é requerido',
  minlength: ':name precisa ter minimo :min caracteres',
  maxlength: ':name precisa ter no maximo :max caracteres',
  email: ':name não é email valido'
};

export class ValidationMessage {
  static getMessage(error: string, replaceTokens: Array<any>) {
    let message = messages[error];
    const tokens = message.match(/\:[a-z]+/g);

    tokens.forEach((token, index) => message = message.replace(token, replaceTokens[index]));

    return message;


  }
}
