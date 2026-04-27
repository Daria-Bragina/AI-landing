const modal = document.getElementById("modal").parentElement;
const modalWindow = document.getElementById("modal");
const openBtns = document.querySelectorAll(".header__menu-btn, .promo__btn");
const closeBtn = document.querySelector(".modal__close");

openBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (!modalWindow.contains(e.target)) {
    modal.classList.remove("active");
  }
});

const form = document.querySelector(".modal__form");
const input = form.querySelector('input[name="email"]');
const error = form.querySelector(".input-error");
const button = document.querySelector(".modal__btn");

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function updateState() {
  const value = input.value.trim();

  if (value === "") {
    error.style.display = "none";
    input.classList.remove("error");
    button.disabled = true;
    return;
  }

  if (!isValidEmail(value)) {
    error.style.display = "flex";
    input.classList.add("error");
    button.disabled = true;
  } else {
    error.style.display = "none";
    input.classList.remove("error");
    button.disabled = false;
  }
}
input.addEventListener("input", updateState);

button.addEventListener("click", (e) => {
  e.preventDefault();
  if (!isValidEmail(input.value)) {
    updateState();
    return;
  }
  input.value = "";
  error.style.display = "none";
  input.classList.remove("error");
  button.disabled = true;
});
