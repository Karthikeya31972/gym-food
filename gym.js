function order(meal, price, qtyId) {
  const phone = "917780568606"; // your WhatsApp number
  const qty = document.getElementById(qtyId).value;
  const total = price * qty;

  const message =
    `Hello,\n` +
    `I want to order:\n` +
    `${meal}\n` +
    `Quantity: ${qty}\n` +
    `Total Price: ₹${total}`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
}
