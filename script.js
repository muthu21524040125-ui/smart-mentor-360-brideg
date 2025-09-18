const form = document.getElementById("loginForm");
const dashboard = document.getElementById("dashboard");
const userName = document.getElementById("userName");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;

    // Send data to Python backend (Flask API)
    fetch("/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                userName.textContent = name;
                form.style.display = "none";
                dashboard.style.display = "block";
            } else {
                alert("❌ Login Failed");
            }
        });
});
