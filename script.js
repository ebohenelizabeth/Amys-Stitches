
const form = document.getElementById("order-form");
const errorMsg = document.getElementById("error");
const successMsg = document.getElementById("success");
const phone = "2348167450617";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const customerPhone = document.getElementById("phone").value.trim();
  const outfit = document.getElementById("outfit").value;
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value.trim();

  successMsg.textContent = "";

  if (name === "" || outfit === "") {
    errorMsg.textContent = "Please enter your name and choose an outfit type.";
    return;
  }

  errorMsg.textContent = "";

  let message = `Hello Amy's Stitches! My name is ${name}. I'd like to order: ${outfit}.`;
  if (date) message += ` I need it by ${date}.`;
  if (customerPhone) message += ` You can reach me on ${customerPhone}.`;
  if (notes) message += ` Details: ${notes}`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  successMsg.textContent = "Thanks! Opening WhatsApp...";
  form.reset();
  window.location.href = url;
});

window.addEventListener("pageshow", function (event) {
  if (event.persisted) {
    form.reset();
    successMsg.textContent = "";
  }
});