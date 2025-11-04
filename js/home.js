document.addEventListener("DOMContentLoaded", () => {
  // Animate hero text
  gsap.to(".hero-content", {
    opacity: 1,
    y: -10,
    duration: 1.5,
    ease: "power3.out"
  });

  gsap.from(".hero h1", {
    opacity: 0,
    y: 50,
    duration: 1.2,
    delay: 0.3,
    ease: "power2.out"
  });

  gsap.from(".hero p", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    delay: 0.6,
    ease: "power2.out"
  });
});
