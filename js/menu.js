const track = document.querySelector('.track');

track.innerHTML += track.innerHTML;

let position = 0;
let speed = 0.8;

function animate() {
  const trackWidth = track.scrollWidth / 2;
  position -= speed;

  if (Math.abs(position) >= trackWidth) {
    position = 0;
  }

  track.style.transform = `translateX(${position}px)`;
  requestAnimationFrame(animate);
}

window.addEventListener('load', animate);


// MENU 

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});