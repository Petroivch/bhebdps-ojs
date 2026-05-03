import Player from './Player';
import Sword from '../weapons/Sword';

export default class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.description = 'Воин';
    this.weapon = new Sword();
  }
}
