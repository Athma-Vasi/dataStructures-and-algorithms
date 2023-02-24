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

	*iterator() {
		let currItem = this.head.next
		while (currItem.next !== null) {
			yield currItem.val
			currItem = currItem.next
		}
	}

	[Symbol.iterator]() {
		return this.iterator()
	}

	// accessor(s)
	get size() {
		return this._size
	}
	get first() {
		return this.head.next.val
	}
	get last() {
		return this.tail.prev.val
	}

	toArray() {
		return [...this]
	}

	forEach(func) {
		for (let data of this) func(data)
	}

	get(idx) {
		if (idx < 0 || idx >= this._size) return -1

		let currNode = this.head.next

		// 0 coerces to falsy and loop exits
		while (idx--) currNode = currNode.next

		return currNode.val
	}

	addAtHead(val) {
		// two pointer method
		const prev = this.head
		const next = this.head.next

		const newNode = new Node(val, prev, next)

		//update the pointers
		prev.next = newNode
		next.prev = newNode

		this._size += 1
	}

	addAtTail(val) {
		const prev = this.tail.prev
		const next = this.tail

		const newNode = new Node(val, prev, next)

		prev.next = newNode
		next.prev = newNode

		this._size += 1
	}

	addAtIndex(val, idx) {
		if (idx < 0 || idx > this._size) return null

		// if idx to be inserted at equals the length of LL, append at end
		if (idx === this._size) {
			this.addAtTail(val)
			return
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

	deleteAtIndex(idx) {
		if (idx < 0 || idx > this._size) return null

		let prev = this.head

		while (idx--) prev = prev.next

		const next = prev.next.next

		prev.next = next
		next.prev = prev

		this._size -= 1
	}
}

const list = new MyLinkedList()

list.addAtHead(4)
list.addAtHead(3)
list.addAtHead(2)
list.addAtHead(1)

console.log(list)
console.log(list.first)
console.log(list.last)
console.log(list.toArray())
list.forEach((val) => console.log(val + val))

MyLinkedList.prototype.filter = function (comparatorFn) {
	const newList = new MyLinkedList()

	for (let node of this) {
		if (comparatorFn(node)) {
			newList.addAtTail(node)
		}
	}

	return newList
}

const result = list.filter((i) => i % 2 === 0)
console.log(result.toArray())

MyLinkedList.prototype.map = function (func) {
	const newList = new MyLinkedList()

	for (let node of this) {
		newList.addAtTail(func(node))
	}

	return newList
}

const mapResult = list.map((val) => val * val * val)
console.log(mapResult.toArray())

/** detecting cycles in singly linked list */
// using two pointers
function hasCycleTwoPointers(head) {
	let fast = head
	let slow = head

	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next

		if (fast === slow) return true
	}

	return false
}

// detecting starting node of cycle
function detectCycle(head) {
	if (!head) return null
	if (!head.next) return null

	let fast = head
	let slow = head

	let pointer = head

	// this is just to figure out where fast and slow intersect
	while (fast && fast.next) {
		fast = fast.next.next
		slow = slow.next

		if (fast === slow) break
	}

	// there is no cycle
	if (fast !== slow) return null

	//now we know there is a cycle and we use another pointer
	while (pointer !== slow) {
		pointer = pointer.next
		slow = slow.next
	}

	//slow and pointer will both be at node where cycle begins
	return slow
}

// reversing a linked list using three pointers
function reverseList(head) {
	let prev = null
	let curr = head
	let next = null

	while (curr !== null) {
		// next points to second element
		next = curr.next
		// head now points to null
		curr.next = prev
		// prev now points to head
		prev = curr
		// curr now points to second element
		curr = next
	}

	return prev
}

// intersection of two linked lists
function intersectionOfTwoLL(head1, head2) {
	const length1 = head1.size
	const length2 = head2.size
	let diff = Math.abs(length1 - length2)
	let biggerLL = length1 > length2 ? head1 : head2
	let smallerLL = length1 > length2 ? head1 : head2

	while (diff--) {
		biggerLL = biggerLL.next
	}

	let pointer1 = biggerLL
	let pointer2 = smallerLL

	while (pointer1 !== pointer2) {
		pointer1 = pointer1.next
		pointer2 = pointer2.next
	}

	return pointer1
}

function intersectionOfTwoLL2(headA, headB) {
	let a = headA
	let b = headB

	while (a !== b) {
		a = !a ? headB : a.next
		b = !b ? headA : b.next
	}

	return a
}
