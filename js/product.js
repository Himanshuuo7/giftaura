// js/product.js

document.addEventListener("DOMContentLoaded", () => {
  const productData = JSON.parse(localStorage.getItem("selectedProduct"));

  if (productData) {
    document.getElementById("productName").textContent = productData.name;
    document.getElementById("productPrice").textContent = "₹" + productData.price;
    document.getElementById("productDescription").textContent = productData.description;
    document.getElementById("productImage").src = productData.image;
  } else {
    // fallback if page opened directly
    document.querySelector(".product-detail-container").innerHTML =
      "<p style='text-align:center; font-size:1.2rem;'>No product selected! Go back to <a href='shop.html'>Shop</a>.</p>";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector(".btn-primary");
  addBtn.addEventListener("click", () => {
    const name = document.getElementById("productName").textContent;
    const price = parseFloat(document.getElementById("productPrice").textContent.replace("₹", ""));
    const image = document.getElementById("productImage").src;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((item) => item.name === name);
    if (existing) existing.quantity++;
    else cart.push({ name, price, image, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("🛒 Added to cart!");
  });
});

// Load product data
const product = JSON.parse(localStorage.getItem('selectedProduct'));
if (product) {
  document.getElementById('productImage').src = product.image;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productPrice').textContent = `₹${product.price}`;
  document.getElementById('productDescription').textContent = product.description;
}

// Redirect to Thank You on Buy Now click
document.querySelector('.btn-secondary').addEventListener('click', () => {
  // Normally checkout hota hai, but abhi direct thankyou page
  window.location.href = "thankyou.html";
});
