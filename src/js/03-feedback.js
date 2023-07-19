const form = document.querySelector("feedback-form");
const LOKAL_KEY = "feedback-form-state";

function saveForm(evt) {
  evt.preventDefault();
  form.addEventListener("input", saveForm);
  localStorage.setItem(LOKAL_KEY, JSON.stringify(form));
  
}