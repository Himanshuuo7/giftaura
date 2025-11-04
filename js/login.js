// 🌸 GiftAura Login/Signup Animation + Functionality
document.addEventListener("DOMContentLoaded", () => {
  // GSAP entrance
  gsap.to(".fade-up", { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" });

  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const loginMsg = document.getElementById("loginMsg");
  const signupMsg = document.getElementById("signupMsg");

  // 🔄 Switch Tabs
  loginTab.addEventListener("click", () => {
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
  });

  signupTab.addEventListener("click", () => {
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
  });

  // 🔐 Login functionality (dummy)
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim();
    const pass = document.getElementById("loginPassword").value.trim();

    if (!email || !pass) {
      loginMsg.textContent = "Please enter all fields!";
      loginMsg.style.color = "#ff6b9e";
      return;
    }

    loginMsg.textContent = "✅ Login successful! Welcome back 💖";
    loginMsg.style.color = "#ff7eb9";
    loginForm.reset();

    gsap.fromTo(loginMsg, { opacity: 0 }, { opacity: 1, duration: 0.6 });
  });

  // 🪩 Signup functionality (dummy)
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const pass = document.getElementById("signupPassword").value.trim();

    if (!name || !email || !pass) {
      signupMsg.textContent = "Please fill all fields!";
      signupMsg.style.color = "#ff6b9e";
      return;
    }

    signupMsg.textContent = "🎉 Account created successfully!";
    signupMsg.style.color = "#ff7eb9";
    signupForm.reset();

    gsap.fromTo(signupMsg, { opacity: 0 }, { opacity: 1, duration: 0.6 });
  });
});
