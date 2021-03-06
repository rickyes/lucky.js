'use strict';

const Node = function (value) {
  this.value = value;
  this.next = null;
}

class LinkedList {
  constructor () {
    this.head = null;
    this.length = 0;
  }

  add(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
    return this.length++;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      const current = this.head;
      this.head = node;
      this.head.next = current;
    }
    this.length++;
    return 0;
  }

  pollFirst() {
    if (this.head !== null) {
      const current = this.head;
      this.head = current.next;
      this.length--;
      return current.value;
    }
    return null;
  }

  peek() {
    return this.head && this.head.value;
  }

  peekLast() {
    if (this.head === null) return null;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current.value;
  }

  get(index) {
    if (this.head === null || this.length < index + 1) return;
    let current = this.head;
    if (index === 0) return current.value;
    let position = 0;
    while (current !== null) {
      if (position++ === index) {
        return current.value;
      }
      current = current.next;
    }
  }

  size() {
    return this.length;
  }

  pop() {
    if (this.head === null) return null;
    let current = this.head;
    if (current.next === null) {
      this.length--;
      this.head = null;
      return current.value;
    } else {
      let after = current.next;
      while (after.next !== null) {
        current = current.next;
        after = current.next;
      }
      current.next = null;
      this.length--;
      return after.value;
    }
  }

  remove(index) {
    if (this.length - 1 < index) return null;
    if (index === 0) {
      return this.pollFirst();
    } else if (index + 1 === this.length) {
      return this.pop();
    }
    let current = this.head;
    let position = 0;
    while (current !== null) {
      if (position + 1 === index) {
        const target = current.next;
        current.next = target.next;
        this.length--;
        return target.value;
      }
      current = current.next;
    }
  }

  removeByValue(value, index = 1) {
    if (this.length - 1 < index) return null;
    let current = this.head;
    let indexNumber = 1;
    let position = 0;
    let beforeNode;
    while (current !== null) {
      if (current.value === value) {
        if (indexNumber === index) {
          if (position === 0) {
            this.pollFirst();
          } else if  (position + 1 === this.length) {
            this.pop();
          } else {
            this.length--;
            beforeNode.next = current.next;
          }
          return position;
        } else {
          indexNumber++;
        }
      }
      position++;
      beforeNode = current;
      current = current.next;
    }
  }

  isEmpty() {
    return this.head ? false : true;
  }

  clear() {
    this.head = null;
    this.length = 0;
    return this.length;
  }
}

module.exports = LinkedList;