// Save product data to localStorage when "View Product" clicked
document.querySelectorAll('.view-product').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    const productData = {
      id: this.dataset.id,
      name: this.dataset.name,
      price: this.dataset.price,
      image: this.dataset.image,
      description: this.dataset.description
    };
    localStorage.setItem('selectedProduct', JSON.stringify(productData));
    window.location.href = "product.html";
  });
});
