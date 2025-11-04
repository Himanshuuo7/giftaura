document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cartItems");
  const subtotalEl = document.getElementById("subtotal");
  const discountEl = document.getElementById("discount");
  const totalEl = document.getElementById("total");
  const applyCoupon = document.getElementById("applyCoupon");
  const couponInput = document.getElementById("couponInput");
  let discount = 0;

  function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
  }

  function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  function renderCart() {
    const cart = getCart();
    cartItemsContainer.innerHTML = "";
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Your cart is empty 💔</p>";
      subtotalEl.textContent = "₹0";
      totalEl.textContent = "₹0";
      discountEl.textContent = "₹0";
      return;
    }

    let subtotal = 0;
    cart.forEach((item, index) => {
      subtotal += item.price * item.quantity;
      const div = document.createElement("div");
      div.classList.add("cart-item");
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>₹${item.price}</p>
          <div class="quantity">
            <button class="qty-btn minus" data-index="${index}">−</button>
            <input type="number" value="${item.quantity}" min="1" data-index="${index}">
            <button class="qty-btn plus" data-index="${index}">+</button>
          </div>
        </div>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      cartItemsContainer.appendChild(div);
    });

    const discountAmount = subtotal * discount;
    const total = subtotal - discountAmount;

    subtotalEl.textContent = `₹${subtotal.toFixed(2)}`;
    discountEl.textContent = `₹${discountAmount.toFixed(2)}`;
    totalEl.textContent = `₹${total.toFixed(2)}`;
  }

  // Quantity + Remove
  cartItemsContainer.addEventListener("click", (e) => {
    const cart = getCart();
    if (e.target.classList.contains("plus")) {
      const index = e.target.dataset.index;
      cart[index].quantity++;
      saveCart(cart);
      renderCart();
    }
    if (e.target.classList.contains("minus")) {
      const index = e.target.dataset.index;
      if (cart[index].quantity > 1) cart[index].quantity--;
      saveCart(cart);
      renderCart();
    }
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.dataset.index;
      cart.splice(index, 1);
      saveCart(cart);
      renderCart();
    }
  });

  // Coupon
  applyCoupon.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    if (code === "GIFT10") {
      discount = 0.1;
      alert("🎁 10% discount applied!");
    } else {
      discount = 0;
      alert("Invalid coupon code");
    }
    renderCart();
  });

  renderCart();
});
document.addEventListener("DOMContentLoaded", () => {
    const proceedBtn = document.querySelector(".btn-primary");
    const subtotalElement = document.getElementById("subtotal");

    // Toast function
    function showToast(message) {
      let toast = document.createElement("div");
      toast.className = "toast";
      toast.textContent = message;
      document.body.appendChild(toast);

      // Show animation
      setTimeout(() => toast.classList.add("show"), 100);

      // Hide after 3 seconds
      setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
      }, 3000);
    }

    proceedBtn.addEventListener("click", (event) => {
      const subtotal = parseFloat(subtotalElement.textContent.replace("₹", "")) || 0;

      if (subtotal <= 0) {
        event.preventDefault();
        showToast("🛒 Your cart is empty! Add some products first 💝");
      }
    });
  });