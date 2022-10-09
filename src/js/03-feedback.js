/*
const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector("input[name='email']");
const messageArea = document.querySelector("textarea[name='message']");
const LOCALSTORAGE_KEY = 'feedback-form-state';

// let tempEmail = '';
// let tempMessage = '';

var _ = require('lodash.throttle');

const checkForm = key => {
  if (localStorage.getItem('LOCALSTORAGE_KEY') !== null) {
    console.log(localStorage.getItem('LOCALSTORAGE_KEY'));
  }
};

form.addEventListener('input', onInput);

function onInput(evt) {
  evt.preventDefault();

  const {
    elements: { email, message },
  } = evt.currentTarget;

  //   console.log(`Email: ${email.value}, Message: ${message.value}`);
  localStorage.setItem(
    'LOCALSTORAGE_KEY',
    // `Email: ${email.value}, Message: ${message.value}`
    {
      email: `${email.value}`,
      message: `${message.value}`,
    }
  );
}
*/
// console.log(`${email.value}`);
// console.log(tempEmail);

/*
const form = document.querySelector('.login-form');

form.addEventListener('submit', onLoginBtn);

function onLoginBtn(event) {
  event.preventDefault();


  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('Заповни всі поля, друже!');
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}
*/
/*-----------====-===============*/
var _ = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector("input[name='email']");
const messageArea = document.querySelector("textarea[name='message']");
const LOCALSTORAGE_KEY = 'feedback-from-state';

const checkForm = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const storageData = checkForm(LOCALSTORAGE_KEY);
if (storageData) {
  inputEmail.value = storageData.email;
  messageArea.value = storageData.message;
}

form.addEventListener('input', _(onImput, 500));

function onImput() {
  const objectToSave = {
    email: inputEmail.value,
    message: messageArea.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(objectToSave));
}

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  console.log({
    email: inputEmail.value,
    message: messageArea.value,
  });
  form.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
