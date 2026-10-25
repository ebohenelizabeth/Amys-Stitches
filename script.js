const form = document.getElementById("order-form");
const errorMsg = document.getElementById("error");
const phone = "2348167450617";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const outfit = document.getElementById("outfit").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value.trim();

  if (name === "" || outfit === "") {
    errorMsg.textContent = "Please enter your name and choose an outfit type.";
    return;
  }

  errorMsg.textContent = "";

  let message = `Hello Amy's Stitches! My name is ${name}. I'd like to order: ${outfit}.`;
  if (date) message += ` I need it by ${date}.`;
  if (notes) message += ` Details: ${notes}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
});