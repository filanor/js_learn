export function generateAuthError(message) {
  switch (message) {
    case "EMAIL_EXISTS":
      return "Пользователь с таким email уже существует!!!";
    case "INVALID_PASSWORD":
      return "Email или Password введены неверно";
    default:
      return "Слишком много попыток входа. Попробуйте позднее.";
  }
}
