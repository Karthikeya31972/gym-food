function order(meal, price, qtyId, timeId) {
  const phone = "917780568606";
  const qty = document.getElementById(qtyId).value;
  const time = document.getElementById(timeId).value;
  const total = price * qty;

  const message =
    `Hello,\n` +
    `I want to order:\n` +
    `${meal}\n` +
    `Quantity: ${qty}\n` +
    `Delivery Time: ${time}\n` +
    `Total Price: ₹${total}`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
}


