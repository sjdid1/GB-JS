const generateRandomPassword = (length = 12, useLetters = true, useNumbers = true, useSpecialChars = true) => {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    let validCharacters = '';
    
    if (useLetters) {
        validCharacters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (useNumbers) {
        validCharacters += '0123456789';
    }
    if (useSpecialChars) {
        validCharacters += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    if (validCharacters === '') {
        throw new Error("At least one type of character must be selected");
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validCharacters.length);
        password += validCharacters.charAt(randomIndex);
    }

    return password;
};

module.exports = {
    generateRandomPassword
};
