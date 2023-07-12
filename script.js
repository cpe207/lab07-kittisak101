const firstNameInput = document.querySelector("#first-name-input");
const LastNameInput = document.querySelector("#last-name-input");
const EmailInput = document.querySelector("#email-input");
const submitBtn = document.querySelector("#submit-btn");
const passwordInput = document.querySelector("#password-input");
//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-invalid");
  firstNameInput.classList.remove("is-valid");
};

LastNameInput.onkeyup = () => {
  LastNameInput.classList.remove("is-invalid");
  LastNameInput.classList.remove("is-valid");
};

EmailInput.onkeyup = () => {
  EmailInput.classList.remove("is-invalid");
  EmailInput.classList.remove("is-valid");
};

passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-invalid");
  passwordInput.classList.remove("is-valid");
};

submitBtn.onclick = () => {
  let FirstNameok = false;
  let LastNameok = false;
  let Emailok = false;
  let Passwordok = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    FirstNameok = true;
  }

  if (LastNameInput.value === "") {
    LastNameInput.classList.add("is-invalid");
  } else {
    LastNameInput.classList.add("is-valid");
    LastNameok = true;
  }

  if (validateEmail(emailInput.value) === false) {
    EmailInput.classList.add("is-invalid");
  } else {
    EmailInput.classList.add("is-valid");
    Emailok = true;
  }

  if (passwordInput.value.length < 6) {
    passwordInput.classList.add("is-invalid");
  } else {
    passwordInput.classList.add("is-valid");
    Passwordok = true;
  }

  if (FirstNameok && LastNameok && Emailok && Passwordok) {
    alert("Registered successfully");
  }
};
