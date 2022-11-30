function checkEmail() {
  document
    .querySelector(".newsletter")
    .insertAdjacentHTML(
      "beforeend",
      `<p style="color:red">Check your email please</p>`
    );
}
