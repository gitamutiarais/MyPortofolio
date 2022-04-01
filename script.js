const scriptURL = "https://script.google.com/macros/s/AKfycbzkXs3F9qA5pyCNt7otgSmi0OmPMnW358wNfl-PNlDzN0pnni_HdzptgMJfXaSRYLck/exec";
const form = document.forms["contact-form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".my-alert");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // ketika tombol loading di klik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // ketika tombol loading di klik
      // tampilkan tombol kirim , hilangkan tombol loading

      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");

      // tampilkan alert
      myAlert.classList.toggle("d-none");

      // reset form
      form.reset();

      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
