function order(meal, price, qtyId, timeId) {
  const phone = "917780568606"; // country code + number (NO +, NO spaces)

  const qty = document.getElementById(qtyId).value;
  const time = document.getElementById(timeId).value;
  const total = price * qty;

  const message =
    "Hello GymFuel Team,\n\n" +
    "I want to order:\n" +
    "Meal: " + meal + "\n" +
    "Quantity: " + qty + "\n" +
    "Delivery Time: " + time + "\n" +
    "Total Price: ₹" + total + "\n\n" +
    "Please confirm.";

  const url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}
