const bg = document.querySelector('.hero-bg');

let x = 0;
let y = 0;

document.addEventListener('mousemove', e => {
  x = (e.clientX / window.innerWidth - 0.5) * 20;
  y = (e.clientY / window.innerHeight - 0.5) * 20;
});

function animate() {
  bg.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  requestAnimationFrame(animate);
}

animate();
