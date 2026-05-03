import Archer from './Archer';
import LongBow from '../weapons/LongBow';

export default class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.description = 'Арбалетчик';
    this.weapon = new LongBow();
  }
}
