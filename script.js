const regexLibrary = 'https://uibakery.io/regex-library';

const regexList = {
    name: /^\b(?:\w|-)+\b$/,
    email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
}

const dataSizes = {
    name: 100,
    email: 100,
    password: 15
}

const form = document.getElementById('registerForm');
const nameInput = document.getElementById('nameInput');
const nameError = document.getElementById('nameError');

const emailInput = document.getElementById('emailInput');
const emailError = document.getElementById('emailError');

const passwordInput = document.getElementById('passwordInput');
const passwordError = document.getElementById('passwordError');

let isFormValid = false;

function setError(inputElement, errorElement, message = '') {
    if (message) {
        errorElement.innerText = message;
        errorElement.classList.remove('hidden');
        inputElement.classList.add('error');
        return false;
    } else {
        errorElement.innerText = '';
        errorElement.classList.add('hidden');
        inputElement.classList.remove('error');
        return true;
    }
}

let currentName = '';
function validateName() {
    const value = nameInput.value.trim();
    if (value.length === 0) {
        return setError(nameInput, nameError, 'O nome é obrigatório.');
    }
    
    if (regexList.name.test(value)) {
        return setError(nameInput, nameError, 'Por favor, insira seu nome completo.');
    }

    if (value.length > dataSizes.name) {
        nameInput.value = currentName;
        return setError(nameInput, nameError, `O tamanho máximo permitido é ${dataSizes.name} caracteres.`);
    }

    currentName = value;
    return setError(nameInput, nameError);
}

let currentPassword = '';
function validatePassword() {
    const value = passwordInput.value.trim();
    if (value.length === 0) {
        return setError(passwordInput, passwordError, 'A senha é obrigatório.');
    }
    
    if (!regexList.password.test(value)) {
        return setError(passwordInput, passwordError, 'Senha inválida. É necessário 1 letra maiuscula, 1 minuscula, 1 número e um caráter especial e ter ao menos 8 caracteres de tamanho.');
    }

    if (value.length > dataSizes.password) {
        passwordInput.value = currentPassword;
        return setError(passwordInput, passwordError, `O tamanho máximo permitido é ${dataSizes.password} caracteres.`);
    }

    currentPassword = value;
    return setError(passwordInput, passwordError);
}

let currentEmail = '';
function validateEmail() {
    const value = emailInput.value.trim();
    if (value.length === 0) {
        return setError(emailInput, emailError, 'O email é obrigatório.');
    }
    
    if (!regexList.email.test(value)) {
        return setError(emailInput, emailError, 'Email inválido.');
    }

    if (value.length > dataSizes.email) {
        emailInput.value = currentEmail;
        return setError(emailInput, emailError, `O tamanho máximo permitido é ${dataSizes.email} caracteres.`);
    }

    currentEmail = value;
    return setError(emailInput, emailError);
}

/**
 * Form events
 */
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    const isFormValid = isNameValid && isEmailValid && isPasswordValid;

    if (!isFormValid) {
        showToast('Não foi possível cadastrar. Por favor, verifique os campos em destaque.', 'error');
    } else {
        showToast('Cadastro realizado com sucesso!', 'success');
        form.reset();
    }
});
