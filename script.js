function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-_=+[]{};:,.<>?';
    let characters = lowercase;

    if (includeUppercase) characters += uppercase;
    if (includeNumbers) characters += numbers;
    if (includeSymbols) characters += symbols;

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

document.getElementById('generatePassword').addEventListener('click', () => {
    const length = parseInt(document.getElementById('passwordLength').value);
    const includeUppercase = document.getElementById('includeUppercase').checked;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSymbols = document.getElementById('includeSymbols').checked;

    const password = generatePassword(length, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('passwordResult').innerText = password;
});

document.getElementById('copyPassword').addEventListener('click', () => {
    const password = document.getElementById('passwordResult').innerText;
    navigator.clipboard.writeText(password)
        .then(() => {
            alert('Contraseña copiada al portapapeles');
        })
        .catch(err => {
            alert('Error al copiar la contraseña: ', err);
        });
});