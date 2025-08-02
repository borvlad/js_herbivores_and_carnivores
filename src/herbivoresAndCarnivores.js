'use strict';

class Animal {
  static alive = [];

  constructor(name) {
    this.name = name;
    this.health = 100;
    // додаємо в список живих тварин
    Animal.alive.push(this);
  }

  // допоміжний метод, який видаляє тварину зі списку живих
  die() {
    const index = Animal.alive.indexOf(this);

    if (index !== -1) {
      Animal.alive.splice(index, 1);
    }
  }
}

class Herbivore extends Animal {
  constructor(name) {
    super(name);
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    // Не працює, якщо ціль - інший хижак
    if (target instanceof Carnivore) {
      return;
    }

    // Не працює, якщо травоїдна тварина сховалась
    if (target.hidden) {
      return;
    }

    // Зменшуємо здоров'я на 50
    target.health -= 50;

    // Якщо здоров'я <= 0, видаляємо із alive
    if (target.health <= 0) {
      target.die();
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
