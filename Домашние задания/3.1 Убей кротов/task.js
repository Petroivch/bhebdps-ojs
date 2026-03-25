const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

function getHole(index) {
  return document.getElementById(`hole${index}`);
}

function resetStats() {
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i <= 9; i++) {
  const hole = getHole(i);

  hole.onclick = function () {
    if (hole.classList.contains('hole_has-mole')) {
      dead.textContent = Number(dead.textContent) + 1;

      if (Number(dead.textContent) === 10) {
        alert('Победа!');
        resetStats();
      }
    } else {
      lost.textContent = Number(lost.textContent) + 1;

      if (Number(lost.textContent) === 5) {
        alert('Вы проиграли!');
        resetStats();
      }
    }
  };
}