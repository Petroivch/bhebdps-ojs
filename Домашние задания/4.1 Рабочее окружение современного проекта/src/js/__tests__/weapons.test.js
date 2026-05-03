import Arm from '../weapons/Arm';
import Axe from '../weapons/Axe';
import Bow from '../weapons/Bow';
import Knife from '../weapons/Knife';
import LongBow from '../weapons/LongBow';
import Staff from '../weapons/Staff';
import StormStaff from '../weapons/StormStaff';
import Sword from '../weapons/Sword';
import Weapon from '../weapons/Weapon';

describe('Weapon', () => {
  test('creates a weapon with initial properties', () => {
    const weapon = new Weapon('Старый меч', 20, 10, 1);

    expect(weapon).toEqual({
      name: 'Старый меч',
      attack: 20,
      durability: 10,
      initDurability: 10,
      range: 1,
    });
  });

  test('takeDamage decreases durability but not below zero', () => {
    const weapon = new Weapon('Копьё', 12, 15, 2);

    weapon.takeDamage(5);
    expect(weapon.durability).toBe(10);

    weapon.takeDamage(50);
    expect(weapon.durability).toBe(0);
  });

  test('getDamage returns full, half or zero damage based on durability', () => {
    const bow = new Bow();

    expect(bow.getDamage()).toBe(10);

    bow.takeDamage(150);
    expect(bow.durability).toBe(50);
    expect(bow.getDamage()).toBe(5);

    bow.takeDamage(150);
    expect(bow.getDamage()).toBe(0);
  });

  test('isBroken returns the correct state', () => {
    const sword = new Sword();

    expect(sword.isBroken()).toBe(false);

    sword.takeDamage(500);
    expect(sword.isBroken()).toBe(true);
  });
});

describe('Weapon subclasses', () => {
  test('Arm keeps infinite durability after damage', () => {
    const arm = new Arm();

    arm.takeDamage(20);

    expect(arm.durability).toBe(Infinity);
    expect(arm.getDamage()).toBe(1);
  });

  test('basic weapon classes have correct stats', () => {
    expect(new Bow()).toMatchObject({
      name: 'Лук',
      attack: 10,
      durability: 200,
      initDurability: 200,
      range: 3,
    });

    expect(new Sword()).toMatchObject({
      name: 'Меч',
      attack: 25,
      durability: 500,
      initDurability: 500,
      range: 1,
    });

    expect(new Knife()).toMatchObject({
      name: 'Нож',
      attack: 5,
      durability: 300,
      initDurability: 300,
      range: 1,
    });

    expect(new Staff()).toMatchObject({
      name: 'Посох',
      attack: 8,
      durability: 300,
      initDurability: 300,
      range: 2,
    });
  });

  test('advanced weapon classes override inherited stats', () => {
    expect(new LongBow()).toMatchObject({
      name: 'Длинный лук',
      attack: 15,
      durability: 200,
      initDurability: 200,
      range: 4,
    });

    expect(new Axe()).toMatchObject({
      name: 'Секира',
      attack: 27,
      durability: 800,
      initDurability: 800,
      range: 1,
    });

    expect(new StormStaff()).toMatchObject({
      name: 'Посох Бури',
      attack: 10,
      durability: 300,
      initDurability: 300,
      range: 3,
    });
  });
});
