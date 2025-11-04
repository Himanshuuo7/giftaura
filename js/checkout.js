document.addEventListener("DOMContentLoaded", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const orderContainer = document.getElementById("orderItems");
  const orderTotal = document.getElementById("orderTotal");
  const placeOrderBtn = document.getElementById("placeOrderBtn");
  const checkoutForm = document.getElementById("checkoutForm");

  let total = 0;
  orderContainer.innerHTML = "";

  // 🛍️ Display cart items
  cartItems.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("order-item");
    div.innerHTML = `
      <span>${item.name}</span>
      <span>₹${item.price}</span>
    `;
    orderContainer.appendChild(div);
    total += item.price;
  });

  orderTotal.textContent = total;

  // 🎯 Validate and Place Order
  placeOrderBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const address = document.getElementById("address").value.trim();
    const pincode = document.getElementById("pincode").value.trim();
    const payment = document.querySelector("input[name='payment']:checked");

    // 🧩 Check if all fields filled
    if (!name || !phone || !email || !address || !pincode || !payment) {
      alert("⚠️ Please fill all details before placing the order!");
      return;
    }

    // ✅ Store order info temporarily (optional)
    const orderData = {
      name,
      phone,
      email,
      address,
      pincode,
      payment: payment.value,
      total,
      orderId: "GA" + Math.floor(Math.random() * 1000000)
    };
    localStorage.setItem("orderData", JSON.stringify(orderData));

    // 💖 Redirect to Thank You page
    localStorage.removeItem("cart");
    window.location.href = "thankyou.html";
  });
});
