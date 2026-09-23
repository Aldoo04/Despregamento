// =========================
// CAMBIAR TEMA
// =========================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeButton.textContent = "☀️";
    } else {
        themeButton.textContent = "🌙";
    }

});


// =========================
// AÑO AUTOMÁTICO
// =========================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// =========================
// BOTÓN CONTACTAR
// =========================

const contactButton = document.getElementById("contactButton");

contactButton.addEventListener("click", () => {

    alert("¡Gracias por contactar! 🚀");

});
