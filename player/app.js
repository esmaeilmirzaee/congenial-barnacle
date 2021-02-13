let button = document.getElementById('hide');
let player = document.getElementById('player');
let active = true;
button.addEventListener('click', () => {
  if (active == true) {
    player.style.visibility = 'visible';
  } else {
    player.style.visibility = 'hidden';
  }
  active = !active;
});
