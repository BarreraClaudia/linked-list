# Linked List

A JavaScript implementation of a singly linked list with a full suite of utility methods.

## Files

- `linkedList.js` — Contains the `Node` and `LinkedList` classes
- `main.js` — Entry point for running examples

## Usage

```javascript
import { LinkedList } from './linkedList.js';

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.prepend('fish');

console.log(list.toString());
// ( fish ) -> ( dog ) -> ( cat ) -> null
```

## API

### `append(value)`

Adds a new node containing `value` to the **end** of the list.

```javascript
list.append('cat'); // ( cat ) -> null
list.append('dog'); // ( cat ) -> ( dog ) -> null
```

### `prepend(value)`

Adds a new node containing `value` to the **start** of the list.

```javascript
list.prepend('fish'); // ( fish ) -> ( cat ) -> ( dog ) -> null
```

### `getSize()`

Returns the total number of nodes in the list.

```javascript
list.getSize(); // 3
```

### `getHead()`

Returns the value of the first node. Returns `undefined` if the list is empty.

```javascript
list.getHead(); // 'fish'
```

### `getTail()`

Returns the value of the last node.

```javascript
list.getTail(); // 'dog'
```

### `at(index)`

Returns the value of the node at the given `index`. Returns `undefined` if the index is out of bounds.

```javascript
list.at(0); // 'fish'
list.at(1); // 'cat'
list.at(9); // undefined
```

### `pop()`

Removes the **head** node and returns its value. Returns `undefined` if the list is empty.

```javascript
list.pop(); // 'fish' — list is now ( cat ) -> ( dog ) -> null
```

### `contains(value)`

Returns `true` if the value exists in the list, `false` otherwise.

```javascript
list.contains('cat'); // true
list.contains('bird'); // false
```

### `findIndex(value)`

Returns the index of the first node containing `value`. Returns `-1` if not found.

```javascript
list.findIndex('cat'); // 0
list.findIndex('bird'); // -1
```

### `toString()`

Returns a string representation of the list. Returns an empty string if the list is empty.

```javascript
list.toString(); // '( cat ) -> ( dog ) -> null'
```

### `insertAt(index, ...values)`

Inserts one or more new nodes at the given `index`. Throws a `RangeError` if the index is out of bounds.

```javascript
list.insertAt(1, 'parrot', 'hamster');
// ( cat ) -> ( parrot ) -> ( hamster ) -> ( dog ) -> null
```

### `removeAt(index)`

Removes the node at the given `index`. Throws a `RangeError` if the index is out of bounds.

```javascript
list.removeAt(1); // removes 'parrot'
// ( cat ) -> ( hamster ) -> ( dog ) -> null
```

## Running

```bash
node main.js
```

> Requires Node.js with ES module support. Make sure to use `.js` extensions in all import paths.
