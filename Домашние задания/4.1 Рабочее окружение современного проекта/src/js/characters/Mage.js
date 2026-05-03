import Player from './Player';
import Staff from '../weapons/Staff';

export default class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.description = 'Маг';
    this.weapon = new Staff();
  }
}
