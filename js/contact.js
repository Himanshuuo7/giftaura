// 🌸 GiftAura Contact Page Animation + Form Functionality
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade animations
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
        toggleActions: "play none none reverse"
      }
    });
  });

  // 💌 Form Submission (Dummy Functionality)
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      msg.textContent = "Please fill in all fields!";
      msg.style.color = "#ff4d88";
      return;
    }

    msg.textContent = "Thank you! Your message has been sent 💖";
    msg.style.color = "#ff4d88";
    form.reset();

    gsap.fromTo(
      msg,
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
    );
  });
});
