const emailForm = document.querySelector("#email");
const btnSub = document.querySelector(".btn-subscribe");
const btnDismiss = document.querySelector(".btn-dismiss");
const validEmail = document.querySelector(".valid-email");
const subForm = document.querySelector(".subscribe-form");
const signupContainer = document.querySelector(".container");
const thanksContainer = document.querySelector(".thanks-container");

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return false;
}

subForm.addEventListener("submit", function (e) {
  let emailVal = emailForm.value;
  if (!validateEmail(emailVal)) {
    validEmail.classList.remove("hidden");
    emailForm.classList.add("wrong-email");
    return;
  }

  signupContainer.classList.add("hidden");
  thanksContainer.classList.remove("hidden");
  validEmail.classList.add("hidden");
  emailForm.classList.remove("wrong-email");
});

btnDismiss.addEventListener("click", function () {
  signupContainer.classList.remove("hidden");
  thanksContainer.classList.add("hidden");

  emailForm.value = "";
});

emailForm.value = "testing@mail.ru";
