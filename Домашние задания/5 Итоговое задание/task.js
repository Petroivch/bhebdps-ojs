/* ================================ ОРУЖИЕ ================================ */

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.initDurability = durability;
    this.range = range;
  }

  takeDamage(damage) {
    if (this.durability === Infinity) {
      return;
    }
    this.durability = Math.max(0, this.durability - damage);
  }

  getDamage() {
    if (this.durability === 0) {
      return 0;
    }
    if (this.durability >= this.initDurability * 0.3) {
      return this.attack;
    }
    return this.attack / 2;
  }

  isBroken() {
    return this.durability === 0;
  }
}

class Arm extends Weapon {
  constructor() {
    super('Рука', 1, Infinity, 1);
  }
}

class Bow extends Weapon {
  constructor() {
    super('Лук', 10, 200, 3);
  }
}

class Sword extends Weapon {
  constructor() {
    super('Меч', 25, 500, 1);
  }
}

class Knife extends Weapon {
  constructor() {
    super('Нож', 5, 300, 1);
  }
}

class Staff extends Weapon {
  constructor() {
    super('Посох', 8, 300, 2);
  }
}

class LongBow extends Bow {
  constructor() {
    super();
    this.name = 'Длинный лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
    super();
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
    this.initDurability = 800;
  }
}

class StormStaff extends Staff {
  constructor() {
    super();
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

/* ================================ ПЕРСОНАЖИ ================================ */

class Player {
  constructor(position, name) {
    this.life = 100;
    this.magic = 20;
    this.speed = 1;
    this.attack = 10;
    this.agility = 5;
    this.luck = 10;
    this.description = 'Игрок';
    this.weapon = new Arm();
    this.position = position;
    this.name = name;
    this.attackCount = 0;
  }

  getLuck() {
    const randomNumber = Math.random() * 100;
    return (randomNumber + this.luck) / 100;
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() / distance;
  }

  takeDamage(damage) {
    this.life = Math.max(0, this.life - damage);
  }

  isDead() {
    return this.life === 0;
  }

  moveLeft(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position -= moveDistance;
  }

  moveRight(distance) {
    const moveDistance = Math.min(distance, this.speed);
    this.position += moveDistance;
  }

  move(distance) {
    if (distance < 0) {
      this.moveLeft(-distance);
    } else {
      this.moveRight(distance);
    }
  }

  isAttackBlocked() {
    const threshold = (100 - this.luck) / 100;
    return this.getLuck() > threshold;
  }

  dodged() {
    const threshold = (100 - this.agility - this.speed * 3) / 100;
    return this.getLuck() > threshold;
  }

  takeAttack(damage) {
    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    }
    if (this.dodged()) {
      return;
    }
    this.takeDamage(damage);
  }

  checkWeapon() {
    if (!this.weapon.isBroken()) {
      return;
    }
    const weaponSequence = this.getWeaponSequence();
    const currentIndex = weaponSequence.findIndex(w => w === this.weapon.constructor.name);
    if (currentIndex !== -1 && currentIndex + 1 < weaponSequence.length) {
      this.setWeaponByClass(weaponSequence[currentIndex + 1]);
    }
  }

  getWeaponSequence() {
    return ['Sword', 'Knife', 'Arm'];
  }

  setWeaponByClass(className) {
    const weapons = {
      'Arm': new Arm(),
      'Bow': new Bow(),
      'Sword': new Sword(),
      'Knife': new Knife(),
      'Staff': new Staff(),
      'LongBow': new LongBow(),
      'Axe': new Axe(),
      'StormStaff': new StormStaff(),
    };
    if (weapons[className]) {
      this.weapon = weapons[className];
    }
  }

  tryAttack(enemy) {
    const distance = Math.abs(this.position - enemy.position);

    if (distance > this.weapon.range) {
      return;
    }

    const damage = this.getDamage(Math.max(distance, 1));
    const wearDamage = 10 * this.getLuck();
    this.weapon.takeDamage(wearDamage);

    if (distance === 0) {
      enemy.position += 1;
      enemy.takeAttack(damage * 2);
    } else {
      enemy.takeAttack(damage);
    }

    this.checkWeapon();
  }

  chooseEnemy(players) {
    const aliveEnemies = players.filter(p => !p.isDead() && p !== this);
    if (aliveEnemies.length === 0) {
      return null;
    }
    return aliveEnemies.reduce((minPlayer, current) => {
      return current.life < minPlayer.life ? current : minPlayer;
    });
  }

  moveToEnemy(enemy) {
    if (enemy === null) {
      return;
    }
    if (this.position < enemy.position) {
      this.moveRight(1);
    } else if (this.position > enemy.position) {
      this.moveLeft(1);
    }
  }

  turn(players) {
    if (this.isDead()) {
      return;
    }
    const enemy = this.chooseEnemy(players);
    if (enemy === null) {
      return;
    }
    this.moveToEnemy(enemy);
    this.tryAttack(enemy);
  }

  toString() {
    return `${this.name} (${this.description}) - Life: ${this.life}, Magic: ${this.magic}, Position: ${this.position}, Weapon: ${this.weapon.name}`;
  }
}

class Warrior extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 120;
    this.speed = 2;
    this.description = 'Воин';
    this.weapon = new Sword();
    this.maxLife = 120;
  }

  takeDamage(damage) {
    const healthPercent = this.life / this.maxLife;

    if (healthPercent < 0.5 && this.getLuck() > 0.8 && this.magic > 0) {
      const magicDamage = Math.min(damage, this.magic);
      this.magic -= magicDamage;
      const remainingDamage = damage - magicDamage;
      if (remainingDamage > 0) {
        this.life = Math.max(0, this.life - remainingDamage);
      }
    } else {
      super.takeDamage(damage);
    }
  }

  getWeaponSequence() {
    return ['Sword', 'Knife', 'Arm'];
  }
}

class Archer extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 35;
    this.agility = 10;
    this.attack = 5;
    this.description = 'Лучник';
    this.weapon = new Bow();
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    const weaponDamage = this.weapon.getDamage();
    return (this.attack + weaponDamage) * this.getLuck() * distance / this.weapon.range;
  }

  getWeaponSequence() {
    return ['Bow', 'Knife', 'Arm'];
  }
}

class Mage extends Player {
  constructor(position, name) {
    super(position, name);
    this.life = 70;
    this.magic = 100;
    this.agility = 8;
    this.attack = 5;
    this.description = 'Маг';
    this.weapon = new Staff();
  }

  takeDamage(damage) {
    if (this.magic > 50) {
      const reducedDamage = damage / 2;
      this.magic -= 12;
      super.takeDamage(reducedDamage);
    } else {
      super.takeDamage(damage);
    }
  }

  getWeaponSequence() {
    return ['Staff', 'Knife', 'Arm'];
  }
}

class Dwarf extends Warrior {
  constructor(position, name) {
    super(position, name);
    this.life = 130;
    this.attack = 15;
    this.luck = 20;
    this.description = 'Гном';
    this.weapon = new Axe();
  }

  takeAttack(damage) {
    this.attackCount = (this.attackCount || 0) + 1;

    if (this.attackCount % 6 === 0 && this.getLuck() > 0.5) {
      damage = damage / 2;
    }

    if (this.isAttackBlocked()) {
      this.weapon.takeDamage(damage);
      return;
    }
    if (this.dodged()) {
      return;
    }
    this.takeDamage(damage);
  }

  getWeaponSequence() {
    return ['Axe', 'Knife', 'Arm'];
  }
}

class Crossbowman extends Archer {
  constructor(position, name) {
    super(position, name);
    this.life = 85;
    this.attack = 8;
    this.agility = 20;
    this.luck = 15;
    this.description = 'Арбалетчик';
    this.weapon = new LongBow();
  }

  getWeaponSequence() {
    return ['LongBow', 'Knife', 'Arm'];
  }
}

class Demiurge extends Mage {
  constructor(position, name) {
    super(position, name);
    this.life = 80;
    this.magic = 120;
    this.attack = 6;
    this.luck = 12;
    this.description = 'Демиург';
    this.weapon = new StormStaff();
  }

  getDamage(distance) {
    if (distance > this.weapon.range) {
      return 0;
    }
    const weaponDamage = this.weapon.getDamage();
    let damage = (this.attack + weaponDamage) * this.getLuck() / distance;

    if (this.magic > 0 && this.getLuck() > 0.6) {
      damage *= 1.5;
    }

    return damage;
  }

  getWeaponSequence() {
    return ['StormStaff', 'Knife', 'Arm'];
  }
}

/* ================================ БОЕВАЯ ФУНКЦИЯ ================================ */

function play(players) {
  const gamePlayers = players.slice();
  let round = 0;

  console.log('\n' + '='.repeat(60));
  console.log('НАЧАЛО БОЕВОГО ПОЕДИНКА');
  console.log('='.repeat(60));
  gamePlayers.forEach(p => console.log(p.toString()));

  while (gamePlayers.filter(p => !p.isDead()).length > 1) {
    round++;
    console.log('\n' + '-'.repeat(60));
    console.log(`РАУНД ${round}`);
    console.log('-'.repeat(60));

    const playersInOrder = gamePlayers
      .filter(p => !p.isDead())
      .sort((a, b) => b.speed - a.speed);

    for (const player of playersInOrder) {
      if (!player.isDead()) {
        player.turn(gamePlayers);
        console.log(player.toString());
      }
    }
  }

  const winner = gamePlayers.find(p => !p.isDead());
  console.log('\n' + '='.repeat(60));
  console.log(`ПОБЕДИТЕЛЬ: ${winner.name} (${winner.description})`);
  console.log(`Оставшееся здоровье: ${winner.life}`);
  console.log('='.repeat(60) + '\n');

  return winner;
}

/* ================================ ЭКСПОРТЫ ================================ */

const exports = {
  Weapon,
  Arm,
  Bow,
  Sword,
  Knife,
  Staff,
  LongBow,
  Axe,
  StormStaff,
  Player,
  Warrior,
  Archer,
  Mage,
  Dwarf,
  Crossbowman,
  Demiurge,
  play,
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = exports;
}

if (typeof window !== 'undefined') {
  Object.assign(window, exports);
}
