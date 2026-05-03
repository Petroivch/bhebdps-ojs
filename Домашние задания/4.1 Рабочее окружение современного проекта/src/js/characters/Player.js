import Arm from '../weapons/Arm';
import Knife from '../weapons/Knife';

export default class Player {
  constructor(position, name) {
    this.position = position;
    this.name = name;
    this.description = 'Игрок';
    this.weapon = new Arm();
    this.alternativeWeapon = Knife;
  }
}
