// js/filters.js
document.addEventListener("DOMContentLoaded", () => {
  const productGrid = document.getElementById("productGrid");
  const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
  const priceRange = document.getElementById("priceRange");
  const priceValue = document.getElementById("priceValue");
  const sortSelect = document.getElementById("sort");
  const applyBtn = document.getElementById("applyFilters");

  // 🛍️ Get all product cards
  const allProducts = Array.from(document.querySelectorAll(".product-card"));

  // 💰 Update price label in real time
  priceRange.addEventListener("input", () => {
    priceValue.textContent = priceRange.value;
  });

  // 🧠 Main filter function
  const applyFilters = () => {
    const selectedCategories = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value);

    const maxPrice = parseInt(priceRange.value);
    const sortValue = sortSelect.value;

    let filtered = allProducts.filter(card => {
      const price = parseInt(card.dataset.price);
      const category = card.dataset.category;

      const categoryMatch =
        selectedCategories.length === 0 || selectedCategories.includes(category);
      const priceMatch = price <= maxPrice;

      return categoryMatch && priceMatch;
    });

    // 📊 Sorting
    if (sortValue === "low-high") {
      filtered.sort((a, b) => parseInt(a.dataset.price) - parseInt(b.dataset.price));
    } else if (sortValue === "high-low") {
      filtered.sort((a, b) => parseInt(b.dataset.price) - parseInt(a.dataset.price));
    }

    // 🧩 Re-render filtered items
    productGrid.innerHTML = "";
    if (filtered.length === 0) {
      productGrid.innerHTML = `<p class="no-results">No products found!</p>`;
    } else {
      filtered.forEach(card => productGrid.appendChild(card));
    }
  };

  // ⚡ Apply on click
  applyBtn.addEventListener("click", applyFilters);

  // 🔄 Sort change triggers instantly
  sortSelect.addEventListener("change", applyFilters);
});

// ✅ Save clicked product details to localStorage
document.querySelectorAll(".view-product").forEach(btn => {
  btn.addEventListener("click", (e) => {
    const productData = {
      name: btn.dataset.name,
      price: btn.dataset.price,
      image: btn.dataset.image,
      description: btn.dataset.description,
    };
    localStorage.setItem("selectedProduct", JSON.stringify(productData));
  });
});
