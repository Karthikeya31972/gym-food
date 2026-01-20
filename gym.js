async function order(meal, price, qtyId, timeId) {
  const phoneEl = document.getElementById("phone");
  const qtyEl = document.getElementById(qtyId);
  const timeEl = document.getElementById(timeId);

  if (!phoneEl || !qtyEl || !timeEl) {
    alert("Something is missing on the page ❌");
    return;
  }

  const phone = phoneEl.value;
  const quantity = qtyEl.value;
  const deliveryTime = timeEl.value;

  if (!phone) {
    alert("Please enter phone number");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        meal,
        price,
        quantity,
        phone,
        deliveryTime
      })
    });

    if (res.ok) {
      alert("Order saved successfully ✅");
    } else {
      alert("Failed to save order ❌");
    }
  } catch (err) {
    console.error(err);
    alert("Backend not reachable ❌");
  }
}
function payUPI(amount) {
  const upiId = "7780568606-3@ibl";   // replace with your UPI
  const name = "GymFuel";

  const url =
    `upi://pay?pa=${upiId}&pn=${name}&am=${amount}&cu=INR`;

  window.location.href = url;
}
