const logo = document.getElementById('interactive-logo');
const avatar = document.querySelector('.logo-avatar');
const overlay = document.getElementById('intro-overlay');
const burbuja = document.getElementById('speech-bubble');
const sonido = document.getElementById('audio-player');
const botones = document.querySelectorAll('.project-btn');

let entro = false;
let sono = false;

sonido.volume = 0.6;

function sonar() {
    if (sono) return;
    sono = true;
    sonido.play().catch(() => sono = false); // si el navegador lo bloquea, reintenta
}

sonar();                                        
document.addEventListener('pointerdown', sonar); // si fue bloqueado, suena en el primer clic
document.addEventListener('keydown', sonar);

// Entrar: el logo pasa a la esquina
function entrar() {
    if (entro) return;
    entro = true;

    logo.classList.add('corner-mode');
    overlay.classList.add('hidden');

    setTimeout(() => {
        burbuja.textContent = "Habla el admin, mira mis proyectos!";
    }, 2000);
}

overlay.addEventListener('click', entrar);
logo.addEventListener('click', entrar);

//Clic en un proyecto el logo muestra el mensaje 
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        entrar();
        burbuja.textContent = boton.dataset.msg;
        avatar.classList.add('talking');
        setTimeout(() => avatar.classList.remove('talking'), 2000);
    });
});