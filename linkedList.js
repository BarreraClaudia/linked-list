class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    // If the list is empty, the new node becomes the head
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // Otherwise, traverse to the last node and attach it
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    const newNode = new Node(value);

    // Point new node's next to the current head
    newNode.nextNode = this.head;

    // Update the head to the new node
    this.head = newNode;
  }

  getSize() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  getHead() {
    if (this.head === null) {
      return undefined;
    } else {
      return this.head.value;
    }
  }

  getTail() {
    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === index) return current.value;
      current = current.nextNode;
      count++;
    }

    return undefined;
  }

  pop() {
    if (this.head === null) return undefined;

    const value = this.head.value;
    this.head = this.head.nextNode;
    return value;
  }

  contains(value) {
    let current = this.head;
    while (current !== null) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  }

  toString() {
    let result = '';
    let current = this.head;

    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    if (result === '') return '';
    return result + 'null';
  }

  insertAt(index, ...values) {
    const size = this.getSize();

    if (index < 0 || index > size) {
      throw new RangeError(`Index ${index} is out of bounds.`);
    }

    // Insert at head for each value, then reverse to maintain order
    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    // Traverse to the node just before the insertion point
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    // Insert each new node, chaining them together
    for (const value of values) {
      const newNode = new Node(value);
      newNode.nextNode = current.nextNode;
      current.nextNode = newNode;
      current = newNode;
    }
  }

  removeAt(index) {
    const size = this.getSize();

    if (index < 0 || index >= size) {
      throw new RangeError(`Index ${index} is out of bounds.`);
    }

    if (index === 0) {
      this.head = this.head.nextNode;
      return;
    }

    // Traverse to the node just before the target
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.nextNode;
    }

    // Skip over the target node
    current.nextNode = current.nextNode.nextNode;
  }
}

export { LinkedList };
