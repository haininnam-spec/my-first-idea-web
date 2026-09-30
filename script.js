// Mouse glow tracking effect
const mouseGlow = document.getElementById('mouseGlow');
document.addEventListener('mousemove', (e) => {
    mouseGlow.style.left = `${e.clientX}px`;
    mouseGlow.style.top = `${e.clientY}px`;
});

// Particle sparkle burst effect on button click
const sparkleBtn = document.getElementById('sparkleBtn');
const card = document.getElementById('card');

const colors = ['#6366f1', '#a855f7', '#ec4899', '#38bdf8', '#f43f5e', '#fbbf24'];

sparkleBtn.addEventListener('click', (e) => {
    const rect = sparkleBtn.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 28; i++) {
        createParticle(centerX, centerY);
    }
});

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 8 + 4;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = randomColor;
    particle.style.boxShadow = `0 0 12px ${randomColor}`;

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 90 + 30;
    const dx = `${Math.cos(angle) * distance}px`;
    const dy = `${Math.sin(angle) * distance}px`;

    particle.style.setProperty('--dx', dx);
    particle.style.setProperty('--dy', dy);
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    document.body.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 800);
}

// 3D Parallax Tilt Effect on Card
card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const rotateX = (-y / rect.height) * 10;
    const rotateY = (x / rect.width) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
});
