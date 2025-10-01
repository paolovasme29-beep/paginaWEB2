document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function(e) {
        e.preventDefault(); // evita que se recargue la página

        const username = document.querySelector(".Usuario input").value.trim();
        const password = document.querySelector(".Contraseña input").value.trim();

        if (username === "" || password === "") {
            alert("Completa todos los campos");
            return;
        }

        // Validación básica
        if (username === "admin" && password === "1234") {
            // Redirige al menú
            window.location.href = "menu.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
});
