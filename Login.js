

    const CORRECT_USER = "kirill";
    const CORRECT_PASS = "12345";

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const message = document.getElementById("message");
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", () => {
      const user = usernameInput.value.trim();
      const pass = passwordInput.value;

      if (user === CORRECT_USER && pass === CORRECT_PASS) {
        message.style.color = "green";
        message.textContent = "Login successful!";
        loginBtn.disabled = true;
      } else {
        message.style.color = "red";
        message.textContent = "Wrong username or password.";
      }
    });
 