// 🌸 Mobile Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navIcons = document.querySelector(".nav-icons");
let menuOpen = false;

menuToggle.addEventListener("click", () => {
  menuOpen = !menuOpen;
  navLinks.classList.toggle("active");
  menuToggle.textContent = menuOpen ? "✕" : "☰";
  
  document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(".vertical-brand",
    { opacity: 0, x: -40 },
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.6
    }
  );

  // Subtle floating motion (loop)
  gsap.to(".vertical-brand", {
    y: "+=10",
    duration: 3,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});


  // 🩷 Mobile view — move icons inside the slide menu
  if (window.innerWidth <= 900) {
    if (menuOpen) {
      navLinks.appendChild(navIcons);
    } else {
      document.querySelector(".navbar").appendChild(navIcons);
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  document.querySelectorAll(".btn-secondary").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      const name = card.querySelector("h4").textContent;
      const price = parseFloat(card.querySelector("p").textContent.replace("₹", ""));
      const image = card.querySelector("img").src;

      const existing = cart.find((item) => item.name === name);
      if (existing) existing.quantity++;
      else cart.push({ name, price, image, quantity: 1 });

      localStorage.setItem("cart", JSON.stringify(cart));
      alert("🛒 Added to cart!");
    });
  });
});
// 🌸 GSAP Scroll Animations for GiftAura About Page
document.addEventListener("DOMContentLoaded", () => {
  gsap.utils.toArray(".fade-up, .fade-left, .fade-right").forEach((elem) => {
    gsap.to(elem, {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: elem,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });
});
