// Демонстрационный файл для быстрого тестирования основной функциональности

const { Warrior, Archer, Mage, Dwarf, Crossbowman, Demiurge, play } = require('./task');

console.log('\n' + '='.repeat(60));
console.log('ДЕМОНСТРАЦИЯ БОЕВОЙ СИСТЕМЫ RPG');
console.log('='.repeat(60) + '\n');

// Тест 1: Базовые операции с оружием
console.log('ТЕСТ 1: Оружие');
console.log('-'.repeat(60));
const sword = require('./task').Sword;
const testSword = new sword();
console.log(`✓ Меч создан: ${testSword.name}, урон: ${testSword.attack}, прочность: ${testSword.durability}`);
testSword.takeDamage(100);
console.log(`✓ После повреждения: прочность ${testSword.durability}, урон ${testSword.getDamage()}`);

// Тест 2: Базовые операции с персонажем
console.log('\nТЕСТ 2: Персонаж');
console.log('-'.repeat(60));
const warrior = new Warrior(0, 'Сергей');
console.log(`✓ Воин создан: ${warrior.name}, HP: ${warrior.life}, позиция: ${warrior.position}`);
warrior.moveRight(2);
console.log(`✓ Воин переместился: новая позиция ${warrior.position}`);
console.log(`✓ Удача: ${warrior.getLuck().toFixed(3)}`);

// Тест 3: Боевой сценарий 1x1
console.log('\nТЕСТ 3: Боевой сценарий (Воин vs Лучник)');
console.log('-'.repeat(60));
const players = [
  new Warrior(0, 'Алёша Попович'),
  new Archer(8, 'Леголас'),
];
play(players);

console.log('\nТЕСТ 4: Специальные персонажи');
console.log('-'.repeat(60));
const demiurge = new Demiurge(0, 'Архимаг');
console.log(`✓ Демиург создан: HP: ${demiurge.life}, Magic: ${demiurge.magic}, Weapon: ${demiurge.weapon.name}`);

console.log('\n' + '='.repeat(60));
console.log('ВСЕ ТЕСТЫ ЗАВЕРШЕНЫ');
console.log('='.repeat(60) + '\n');
