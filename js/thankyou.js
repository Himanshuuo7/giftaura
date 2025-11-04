document.addEventListener("DOMContentLoaded", () => {
  // ✅ Retrieve order data
  const orderData = JSON.parse(localStorage.getItem("orderData"));

  if (orderData) {
    document.getElementById("userNameText").textContent =
      `Thank you, ${orderData.name}! 💖`;
    document.getElementById("orderId").textContent = orderData.orderId;
  } else {
    document.getElementById("orderId").textContent =
      "GA-" + Math.floor(Math.random() * 90000 + 10000);
  }

  // ✅ Ensure card visible
  const card = document.querySelector(".thankyou-card");
  card.style.opacity = "1";
  card.style.visibility = "visible";
  card.style.display = "flex";

  // ✅ Entry animation
  gsap.from(card, {
    opacity: 0,
    y: 50,
    duration: 1.2,
    ease: "power2.out",
  });

  // ✅ Icon animation
  gsap.from(".icon", {
    scale: 0,
    rotation: 360,
    duration: 1.2,
    ease: "elastic.out(1, 0.6)",
  });

  // 🎉 Confetti Animation (Festive)
  const duration = 3 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 50 * (timeLeft / duration);
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.9), y: Math.random() - 0.2 },
        colors: ["#ff85b3", "#ffc0cb", "#ffffff", "#ffb6c1"],
      })
    );
  }, 250);

  // 🌸 Sparkle effect using GSAP
  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    document.body.appendChild(sparkle);

    gsap.set(sparkle, {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: 0,
      scale: Math.random() * 0.8 + 0.5,
    });

    gsap.to(sparkle, {
      opacity: 1,
      duration: 0.8,
      delay: Math.random() * 1.5,
      yoyo: true,
      repeat: 1,
      onComplete: () => sparkle.remove(),
    });
  }
});
