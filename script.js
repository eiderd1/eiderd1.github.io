// Manejo del formulario "Escríbenos"
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página

    // Obtenemos los valores del formulario
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    if (nombre && email && mensaje) {
        alert("¡Gracias por contactarnos, " + nombre + "! Hemos recibido tu mensaje.");
        document.querySelector("form").reset(); // Limpiar el formulario
    } else {
        alert("Por favor, completa todos los campos.");
    }
});

// Efecto de scroll en las secciones
window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
});

// ==============================
// Animación de fondo estilo Matrix
// ==============================

const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");

// Ajustar tamaño del canvas al inicio y cuando se redimensione la ventana
function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

ajustarCanvas();
window.addEventListener("resize", ajustarCanvas);

// Caracteres y configuración
const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(0);

function drawMatrix() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00FF00"; 
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

setInterval(drawMatrix, 50);
