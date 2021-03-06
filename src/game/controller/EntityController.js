class EntityController {
  constructor(stage) {
    this.elements = {};
    this.stage = stage;
  }

  add(element) {
    if (!this.has(element)) {
      this.elements[element.getName()] = element;
    }
  }

  find(element) {
    if (this.has(element)) {
      return this.elements[element.getName()];
    }
    return null;
  }

  getAll() {
    return Object.values(this.elements);
  }

  has(element) {
    return element.getName() in this.elements;
  }

  remove(element) {
    if (this.has(element)) {
      this.elements[element.getName()].remove();
      delete this.elements[element.getName()];
    }
  }

  update() {
    throw new Error('must be implemented by subclass!');
  }
}

module.exports = EntityController;
