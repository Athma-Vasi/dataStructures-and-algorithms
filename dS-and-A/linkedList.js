/*
class Node {
	constructor(val = null, prev = null, next = null) {
		this.val = val
		this.prev = prev
		this.next = next
	}
}

class MyLinkedList {
	constructor() {
		this.head = new Node()
		this.tail = new Node()
		this._size = 0

		this.head.next = this.tail
		this.tail.prev = this.head
	}

	//for iterating
	*iterator() {
		let currNode = this.head.next
		while (currNode.next !== null) {
			yield currNode.val
			currNode = currNode.next
		}
	}

	[Symbol.iterator]() {
		return this.iterator()
	}

	//accessors
	get size() {
		return this._size
	}
	get first() {
		return this.head.next.val
	}
	get last() {
		return this.tail.prev.val
	}

	//methods

	toArray() {
		return [...this]
	}

	forEach(func) {
		for (let data of this) func(data)
	}

	get(idx) {
		if (idx < 0 || idx >= this._size) throw new Error('index given outside range')

		let currNode = this.head.next

		while (idx--) currNode = currNode.next

		return currNode.val
	}

	insertAtHead(val) {
		const prev = this.head
		const next = this.head.next

		const newNode = new Node(val, prev, next)

		prev.next = newNode
		next.prev = newNode

		this._size += 1
	}

	insertAtTail(val) {
		const prev = this.tail.prev
		const next = this.tail

		const newNode = new Node(val, prev, next)

		prev.next = newNode
		next.prev = newNode

		this._size += 1
	}

	insertAtIdx(idx, val) {
		if (idx < 0 || idx >= this._size) throw new Error('index given outside range')

		if (idx === this._size) {
			this.insertAtTail(val)
			this._size += 1
		} else {
			let prev = this.head

			while (idx--) prev = prev.next

			const next = prev.next

			const newNode = new Node(val, prev, next)

			prev.next = newNode
			next.prev = newNode

			this._size += 1
		}
	}

	deleteAtIdx(idx) {
		if (idx < 0 || idx >= this._size) throw new Error('index given outside range')

		let prev = this.head

		while (idx--) prev = prev.next

		const next = prev.next.next

		prev.next = next
		next.prev = prev

		this._size -= 1
	}
}

// detecting cycles in a singly linked list
function hasCycleLL(head) {
	let fast = head
	let slow = head

	//avoids calling next on a null value
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next

		if (fast === slow) return true
	}

	return false
}

// detecting cycles and returning starting node of cycle
function startingNodeOfLLCycle(head) {
	let fast = head
	let slow = head

	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next

		if (fast === slow) break
	}

	if (fast !== slow) return null

	let pointer = head

	while (pointer !== slow) {
		slow = slow.next
		pointer = pointer.next
	}

	return slow
}
*/

class Node {
  constructor(val = 0, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedList {
  constructor(size = 0, head = new Node(), tail = new Node()) {
    this._size = size;
    this.head = head;
    this.tail = tail;

    //connect head and tail
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  //accessors
  get size() {
    return this._size;
  }
  get first() {
    return this.head.next.val;
  }
  get last() {
    return this.tail.prev.val;
  }
  get isEmpty() {
    return this._size === 0;
  }

  //generator
  *iterator() {
    let currNode = this.head.next;
    while (currNode.next !== null) {
      yield currNode.val;
      currNode = currNode.next;
    }
  }

  [Symbol.iterator]() {
    return this.iterator();
  }

  //methods
  elementAt(idx) {
    if (idx < 0 || idx >= this._size)
      throw new Error("index given is outside size of list");

    let currNode = this.head.next;
    while (idx--) currNode = currNode.next;

    return currNode.val;
  }

  indexOf(val) {
    let currNode = this.head.next;

    let idx = 0;
    while (currNode.val !== val) {
      currNode = currNode.next;
      idx += 1;
    }

    return idx;
  }

  insertAtHead(val) {
    const prev = this.head;
    const next = this.head.next;

    const newNode = new Node(val, prev, next);

    prev.next = newNode;
    next.prev = newNode;

    this._size += 1;
  }

  insertAtTail(val) {
    const prev = this.tail.prev;
    const next = this.tail;

    const newNode = new Node(val, prev, next);

    prev.next = newNode;
    next.prev = newNode;

    this._size += 1;
  }

  insertAtIndex(idx, val) {
    if (idx < 0 || idx > this._size)
      throw new Error("index given is outside size of list");

    if (idx === this._size) {
      this.insertAtTail(val);
      this._size += 1;
      return;
    } else {
      let prev = this.head;
      while (idx--) prev = prev.next;
      const next = prev.next;

      const newNode = new Node(val, prev, next);

      prev.next = newNode;
      next.prev = newNode;

      this._size += 1;
    }
  }

  removeAtIndex(idx) {
    if (idx < 0 || idx >= this._size)
      throw new Error("index given is outside size of list");

    let prev = this.head;
    while (idx--) prev = prev.next;
    const next = prev.next.next;

    prev.next = next;
    next.prev = prev;

    this._size -= 1;
  }

  toArray() {
    return [...this];
  }

  forEach(func) {
    for (const val of this) func(val);
  }
}

const list = new LinkedList();
// list.insertAtHead(5)
// list.insertAtHead(4)
// list.insertAtHead(3)
// list.insertAtHead(2)
// list.insertAtHead(1)

console.log(list);
// console.log(list.toArray())
// list.removeAtIndex(2)
// console.log(list.toArray())
// list.forEach((val) => console.log(val * val))
// console.log(list.indexOf(5))
console.log(list.isEmpty);

function hasCycleLL(head) {
  let fast = this.head;
  let slow = this.head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) return true;
  }
  return false;
}

function findStartingNodeCycle(head) {
  let fast = this.head;
  let slow = this.head;

  while (fast?.next) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) break;
  }

  if (fast !== slow) return null;

  let pointer = this.head;

  while (pointer !== slow) {
    pointer = pointer.next;
    slow = slow.next;
  }

  return slow;
}

function reversingALinkedList(head) {
  //using three pointers
  let curr = head;
  let next = null;
  let prev = null;

  //next should point to 2nd element
  next = curr.next;
  //need to break the chain between curr and next, so curr will point to left
  curr = prev;
  //now we need to move prev to where curr is atm; we have a ref to curr
  prev = curr;
  //then move to curr to where next is, one step to right
  curr = next;
}
