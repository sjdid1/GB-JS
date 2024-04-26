const passwordGenerator = require('./passwordGenerator.js');

const password1 = passwordGenerator.generateRandomPassword();
const password2 = passwordGenerator.generateRandomPassword(16, false, true, true);
console.log(password1);
console.log(password2);