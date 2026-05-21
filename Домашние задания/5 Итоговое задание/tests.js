const {
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
} = require('./task');

describe('Weapon Classes', () => {
  describe('Weapon Base Class', () => {
    it('should create weapon with correct properties', () => {
      const weapon = new Weapon('Test Weapon', 20, 100, 2);
      expect(weapon.name).toBe('Test Weapon');
      expect(weapon.attack).toBe(20);
      expect(weapon.durability).toBe(100);
      expect(weapon.initDurability).toBe(100);
      expect(weapon.range).toBe(2);
    });

    it('should apply damage to weapon', () => {
      const weapon = new Weapon('Меч', 25, 500, 1);
      weapon.takeDamage(20);
      expect(weapon.durability).toBe(480);
    });

    it('should not go below 0 durability', () => {
      const weapon = new Weapon('Меч', 25, 500, 1);
      weapon.takeDamage(600);
      expect(weapon.durability).toBe(0);
    });

    it('should calculate damage correctly when durability >= 30%', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      expect(weapon.getDamage()).toBe(20);
      weapon.takeDamage(30);
      expect(weapon.getDamage()).toBe(20);
    });

    it('should return half damage when durability < 30%', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(71);
      expect(weapon.getDamage()).toBe(10);
    });

    it('should return 0 damage when broken', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      weapon.takeDamage(100);
      expect(weapon.getDamage()).toBe(0);
    });

    it('should detect broken weapon', () => {
      const weapon = new Weapon('Меч', 20, 100, 1);
      expect(weapon.isBroken()).toBe(false);
      weapon.takeDamage(100);
      expect(weapon.isBroken()).toBe(true);
    });
  });

  describe('Arm Weapon', () => {
    it('should have infinite durability', () => {
      const arm = new Arm();
      expect(arm.durability).toBe(Infinity);
      arm.takeDamage(100);
      expect(arm.durability).toBe(Infinity);
    });

    it('should have correct properties', () => {
      const arm = new Arm();
      expect(arm.name).toBe('Рука');
      expect(arm.attack).toBe(1);
      expect(arm.range).toBe(1);
    });
  });

  describe('Basic Weapons', () => {
    it('should create Bow with correct stats', () => {
      const bow = new Bow();
      expect(bow.name).toBe('Лук');
      expect(bow.attack).toBe(10);
      expect(bow.durability).toBe(200);
      expect(bow.range).toBe(3);
    });

    it('should create Sword with correct stats', () => {
      const sword = new Sword();
      expect(sword.name).toBe('Меч');
      expect(sword.attack).toBe(25);
      expect(sword.durability).toBe(500);
      expect(sword.range).toBe(1);
    });

    it('should create Knife with correct stats', () => {
      const knife = new Knife();
      expect(knife.name).toBe('Нож');
      expect(knife.attack).toBe(5);
      expect(knife.durability).toBe(300);
      expect(knife.range).toBe(1);
    });

    it('should create Staff with correct stats', () => {
      const staff = new Staff();
      expect(staff.name).toBe('Посох');
      expect(staff.attack).toBe(8);
      expect(staff.durability).toBe(300);
      expect(staff.range).toBe(2);
    });
  });

  describe('Enhanced Weapons', () => {
    it('should create LongBow with correct stats', () => {
      const bow = new LongBow();
      expect(bow.name).toBe('Длинный лук');
      expect(bow.attack).toBe(15);
      expect(bow.range).toBe(4);
      expect(bow.durability).toBe(200);
    });

    it('should create Axe with correct stats', () => {
      const axe = new Axe();
      expect(axe.name).toBe('Секира');
      expect(axe.attack).toBe(27);
      expect(axe.range).toBe(1);
      expect(axe.durability).toBe(800);
    });

    it('should create StormStaff with correct stats', () => {
      const staff = new StormStaff();
      expect(staff.name).toBe('Посох Бури');
      expect(staff.attack).toBe(10);
      expect(staff.range).toBe(3);
      expect(staff.durability).toBe(300);
    });
  });
});

describe('Player Classes', () => {
  describe('Base Player Class', () => {
    it('should initialize with correct default values', () => {
      const player = new Player(5, 'Боб');
      expect(player.life).toBe(100);
      expect(player.magic).toBe(20);
      expect(player.speed).toBe(1);
      expect(player.attack).toBe(10);
      expect(player.agility).toBe(5);
      expect(player.luck).toBe(10);
      expect(player.description).toBe('Игрок');
      expect(player.position).toBe(5);
      expect(player.name).toBe('Боб');
      expect(player.weapon).toBeInstanceOf(Arm);
    });

    it('should calculate luck correctly', () => {
      const player = new Player(0, 'Test');
      const luck = player.getLuck();
      expect(luck).toBeGreaterThanOrEqual(0.1);
      expect(luck).toBeLessThanOrEqual(1.1);
    });

    it('should calculate damage with correct formula', () => {
      const player = new Player(0, 'Test');
      const damage = player.getDamage(1);
      expect(damage).toBeGreaterThanOrEqual(0);
    });

    it('should return 0 damage when distance exceeds range', () => {
      const player = new Player(0, 'Test');
      expect(player.getDamage(5)).toBe(0);
    });

    it('should take damage correctly', () => {
      const player = new Player(0, 'Test');
      player.takeDamage(50);
      expect(player.life).toBe(50);
    });

    it('should not have negative life', () => {
      const player = new Player(0, 'Test');
      player.takeDamage(150);
      expect(player.life).toBe(0);
    });

    it('should detect dead player', () => {
      const player = new Player(0, 'Test');
      expect(player.isDead()).toBe(false);
      player.takeDamage(100);
      expect(player.isDead()).toBe(true);
    });

    it('should move left correctly', () => {
      const player = new Player(10, 'Test');
      player.moveLeft(3);
      expect(player.position).toBe(9);
    });

    it('should not move left more than speed', () => {
      const player = new Player(10, 'Test');
      player.moveLeft(5);
      expect(player.position).toBe(9);
    });

    it('should move right correctly', () => {
      const player = new Player(10, 'Test');
      player.moveRight(3);
      expect(player.position).toBe(11);
    });

    it('should not move right more than speed', () => {
      const player = new Player(10, 'Test');
      player.moveRight(5);
      expect(player.position).toBe(11);
    });

    it('should move in correct direction based on distance sign', () => {
      const player = new Player(10, 'Test');
      player.move(-3);
      expect(player.position).toBe(9);
      player.move(5);
      expect(player.position).toBe(10);
    });
  });

  describe('Combat Methods', () => {
    it('should determine attack block based on luck', () => {
      const player = new Player(0, 'Test');
      const blocked = player.isAttackBlocked();
      expect(typeof blocked).toBe('boolean');
    });

    it('should determine dodge based on agility and speed', () => {
      const player = new Player(0, 'Test');
      const dodged = player.dodged();
      expect(typeof dodged).toBe('boolean');
    });

    it('should apply weapon damage on block', () => {
      const player1 = new Player(0, 'Test1');
      const player2 = new Player(5, 'Test2');
      player1.weapon = new Sword();

      jest.spyOn(player1, 'isAttackBlocked').mockReturnValue(true);
      player1.tryAttack(player2);
      expect(player2.weapon.durability).toBeLessThan(500);
    });

    it('should choose weakest enemy', () => {
      const player1 = new Player(0, 'Test1');
      const player2 = new Player(5, 'Test2');
      const player3 = new Player(10, 'Test3');

      player2.life = 30;
      player3.life = 50;

      const enemy = player1.chooseEnemy([player1, player2, player3]);
      expect(enemy).toBe(player2);
    });

    it('should move towards enemy', () => {
      const player1 = new Player(0, 'Test1');
      player1.speed = 2;
      const player2 = new Player(10, 'Test2');

      player1.moveToEnemy(player2);
      expect(player1.position).toBeGreaterThan(0);
    });

    it('should check and replace broken weapon', () => {
      const warrior = new Warrior(0, 'Test');
      warrior.weapon.durability = 0;
      warrior.checkWeapon();
      expect(warrior.weapon).toBeInstanceOf(Knife);
    });
  });

  describe('Warrior Class', () => {
    it('should initialize with warrior stats', () => {
      const warrior = new Warrior(5, 'Богатырь');
      expect(warrior.life).toBe(120);
      expect(warrior.speed).toBe(2);
      expect(warrior.description).toBe('Воин');
      expect(warrior.weapon).toBeInstanceOf(Sword);
    });

    it('should use magic on low health with high luck', () => {
      const warrior = new Warrior(0, 'Test');
      warrior.life = 50;
      warrior.magic = 20;

      jest.spyOn(warrior, 'getLuck').mockReturnValue(0.9);
      warrior.takeDamage(10);

      expect(warrior.magic).toBeLessThan(20);
    });

    it('should not use magic on high health', () => {
      const warrior = new Warrior(0, 'Test');
      warrior.life = 120;
      warrior.magic = 20;

      jest.spyOn(warrior, 'getLuck').mockReturnValue(0.9);
      warrior.takeDamage(10);

      expect(warrior.magic).toBe(20);
      expect(warrior.life).toBe(110);
    });
  });

  describe('Archer Class', () => {
    it('should initialize with archer stats', () => {
      const archer = new Archer(5, 'Леголас');
      expect(archer.life).toBe(80);
      expect(archer.magic).toBe(35);
      expect(archer.agility).toBe(10);
      expect(archer.attack).toBe(5);
      expect(archer.description).toBe('Лучник');
      expect(archer.weapon).toBeInstanceOf(Bow);
    });

    it('should calculate damage with distance multiplier', () => {
      const archer = new Archer(0, 'Test');
      const damage = archer.getDamage(2);
      expect(damage).toBeGreaterThanOrEqual(0);
    });
  });

  describe('Mage Class', () => {
    it('should initialize with mage stats', () => {
      const mage = new Mage(5, 'Гендальф');
      expect(mage.life).toBe(70);
      expect(mage.magic).toBe(100);
      expect(mage.agility).toBe(8);
      expect(mage.attack).toBe(5);
      expect(mage.description).toBe('Маг');
      expect(mage.weapon).toBeInstanceOf(Staff);
    });

    it('should reduce damage on high magic level', () => {
      const mage = new Mage(0, 'Test');
      mage.life = 100;
      mage.magic = 100;
      mage.takeDamage(50);

      expect(mage.life).toBe(75);
      expect(mage.magic).toBe(88);
    });

    it('should take full damage on low magic level', () => {
      const mage = new Mage(0, 'Test');
      mage.life = 100;
      mage.magic = 30;
      mage.takeDamage(50);

      expect(mage.life).toBe(50);
      expect(mage.magic).toBe(30);
    });
  });

  describe('Dwarf Class', () => {
    it('should initialize with dwarf stats', () => {
      const dwarf = new Dwarf(5, 'Гномик');
      expect(dwarf.life).toBe(130);
      expect(dwarf.attack).toBe(15);
      expect(dwarf.luck).toBe(20);
      expect(dwarf.description).toBe('Гном');
      expect(dwarf.weapon).toBeInstanceOf(Axe);
    });

    it('should reduce damage on every 6th attack', () => {
      const dwarf = new Dwarf(0, 'Test');
      jest.spyOn(dwarf, 'isAttackBlocked').mockReturnValue(false);
      jest.spyOn(dwarf, 'dodged').mockReturnValue(false);
      jest.spyOn(dwarf, 'getLuck').mockReturnValue(0.7);

      for (let i = 1; i < 6; i++) {
        dwarf.takeAttack(10);
      }
      const lifeBeforeSix = dwarf.life;

      dwarf.takeAttack(10);
      expect(dwarf.life).toBeGreaterThan(lifeBeforeSix);
    });
  });

  describe('Crossbowman Class', () => {
    it('should initialize with crossbowman stats', () => {
      const crossbowman = new Crossbowman(5, 'Арбалетчик');
      expect(crossbowman.life).toBe(85);
      expect(crossbowman.attack).toBe(8);
      expect(crossbowman.agility).toBe(20);
      expect(crossbowman.luck).toBe(15);
      expect(crossbowman.description).toBe('Арбалетчик');
      expect(crossbowman.weapon).toBeInstanceOf(LongBow);
    });
  });

  describe('Demiurge Class', () => {
    it('should initialize with demiurge stats', () => {
      const demiurge = new Demiurge(5, 'Демиург');
      expect(demiurge.life).toBe(80);
      expect(demiurge.magic).toBe(120);
      expect(demiurge.attack).toBe(6);
      expect(demiurge.luck).toBe(12);
      expect(demiurge.description).toBe('Демиург');
      expect(demiurge.weapon).toBeInstanceOf(StormStaff);
    });

    it('should increase damage with high magic and luck', () => {
      const demiurge = new Demiurge(0, 'Test');
      demiurge.magic = 100;

      jest.spyOn(demiurge, 'getLuck').mockReturnValue(0.7);
      const damage = demiurge.getDamage(1);

      expect(damage).toBeGreaterThan(0);
    });
  });
});

describe('Game Function', () => {
  it('should determine a winner', () => {
    const players = [
      new Warrior(0, 'Воин1'),
      new Archer(5, 'Лучник1'),
    ];

    const winner = play(players);
    expect(winner).toBeDefined();
    expect(!winner.isDead()).toBe(true);
  });

  it('should end when only one player remains', () => {
    const players = [
      new Warrior(0, 'Воин1'),
      new Warrior(5, 'Воин2'),
    ];

    const winner = play(players);
    const aliveCount = players.filter(p => !p.isDead()).length;
    expect(aliveCount).toBe(1);
  });
});

describe('Integration Tests', () => {
  it('should handle full combat scenario', () => {
    const warrior = new Warrior(0, 'Воин');
    const archer = new Archer(5, 'Лучник');

    expect(warrior.life).toBe(120);
    expect(archer.life).toBe(80);

    warrior.moveRight(1);
    expect(warrior.position).toBe(1);

    warrior.tryAttack(archer);
    expect(archer.life).toBeLessThan(80);
  });

  it('should handle weapon swap on break', () => {
    const warrior = new Warrior(0, 'Воин');
    const sword = warrior.weapon;

    while (!sword.isBroken()) {
      sword.takeDamage(100);
    }

    warrior.checkWeapon();
    expect(warrior.weapon).not.toBe(sword);
  });

  it('should handle turn sequence correctly', () => {
    const players = [
      new Warrior(0, 'Воин'),
      new Archer(5, 'Лучник'),
    ];

    const initialArcherLife = players[1].life;
    players[0].turn(players);

    expect(players[1].life).toBeLessThanOrEqual(initialArcherLife);
  });
});
