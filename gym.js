function order(meal, price, qtyId) {
  const phone = "917780568606"; // your WhatsApp number
  const qty = document.getElementById(qtyId).value;
  const total = price * qty;

 const message =
`Hello GymFuel Team,
I want to order:

Meal: ${meal}
Quantity: ${qty}
Delivery Time: ${time}
Total Price: ₹${total}

Please confirm.`;

  const url =
    `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.location.href = url;
}


