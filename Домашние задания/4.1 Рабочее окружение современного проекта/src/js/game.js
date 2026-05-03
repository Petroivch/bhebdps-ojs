import Archer from './characters/Archer';
import Warrior from './characters/Warrior';
import Mage from './characters/Mage';
import Dwart from './characters/Dwart';
import Crossbowman from './characters/Crossbowman';
import Demourge from './characters/Demourge';

export function createParty() {
  return [
    new Archer(0, 'Леголас'),
    new Warrior(1, 'Арагорн'),
    new Mage(2, 'Гэндальф'),
    new Dwart(3, 'Гимли'),
    new Crossbowman(4, 'Бард'),
    new Demourge(5, 'Саруман'),
  ];
}

export function play() {
  const party = createParty();
  const root = document.querySelector('[data-game-root]');

  if (root) {
    root.innerHTML = party
      .map((player) => `<li>${player.description}: ${player.name} (${player.weapon.name})</li>`)
      .join('');
  }

  return party;
}

export default play;
