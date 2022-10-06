const contactInfo = document.querySelector('#contact_info');
const form = document.querySelector('#contact_form');
const username = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (mail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};

const validateInputs = (usernameValue, emailValue, messageValue) => {
  if (usernameValue === '') {
    setError(username, 'Username is required');
  } else {
    setSuccess(username);
  }

  if (emailValue === '') {
    setError(email, 'Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, 'Provide a valid email address');
  } else {
    setSuccess(email);
  }

  const required = 20;
  const left = required - messageValue.length;
  if (left === 20) {
    setError(message, 'messages is required');
  } else if (left > 0) {
    setError(message, `${left} more characters required`);
  } else {
    setSuccess(message);
  }
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  if (
    !usernameValue ||
    !emailValue ||
    !isValidEmail(emailValue) ||
    messageValue.length <= 20
  ) {
    validateInputs(usernameValue, emailValue, messageValue);
  } else {
    contactInfo.innerText = 'Thank you. Your information has been submitted.';
    form.classList.add('none');
  }
});
