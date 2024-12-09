import * as iziToast from "https://cdn.jsdelivr.net/npm/izitoast/dist/js/iziToast.min.js";


const form = document.querySelector(".form");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const delay = Number(formData.get("delay"));
  const state = formData.get("state");

  createPromise(delay, state)
    .then((delay) => {
      iziToast.success({
        title: "Success",
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: "Error",
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === "fulfilled") {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}