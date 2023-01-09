class Node {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null
	}

	//accessors
	get rootNode() {
		return this.root
	}

	search(node, key) {
		return node === null
			? null
			: node.data > key
			? this.search(node.left, key)
			: node.data < key
			? this.search(node.right, key)
			: node
	}

	insert(data) {
		const newNode = new Node(data)

		this.root === null ? (this.root = newNode) : this.insertNode(this.root, newNode)
	}

	#insertNode(node, newNode) {
		//if data is less than node data, move left
		if (newNode.data < node.data) {
			node.left === null ? (node.left = newNode) : this.insertNode(node.left, newNode)
		}
		//if data is greater than node data, move right
		else {
			node.right === null ? (node.right = newNode) : this.insertNode(node.right, newNode)
		}
	}

	remove(data) {
		this.root = this.removeNode(this.root, data)
	}

	#removeNode(node, key) {
		if (node === null) return null
		else if (node.data > key) {
			node.left = this.removeNode(node.left, key)
			return node
		} else if (node.data < key) {
			node.right = this.removeNode(node.right, key)
			return node
		}
		//if node data is equal to key ( a match)
		else {
			//deleting a node with no children
			if (node.left === null && node.right === null) {
				node = null
				return node
			}
			//deleting a node with left child only
			if (node.right === null) {
				//assign node to left
				node = node.left
				return node
			}
			//deleting a node with right child only
			else if (node.left === null) {
				node = node.right
				return node
			}

			//deleting a node with two children
			//minimum of right sub-tree is stored in aux
			const aux = this.findMinNode(node.right)
			node.data = aux.data

			node.right = this.removeNode(node.right, aux.data)
			return node
		}
	}

	findMinNode(node) {
		//if left child of node is null ( node is leaf ), it must be minimum
		return node.left === null ? node : this.findMinNode(node.left)
	}

	toArrayInOrder(node) {
		const nodes = []

		function helper(node) {
			if (node !== null) {
				helper(node.left)
				nodes.push(node.data)
				helper(node.right)
			}
		}
		helper(node)

		return nodes
	}

	toArrayPreOrder(node) {
		const nodes = []

		function helper(node) {
			if (node !== null) {
				nodes.push(node.data)
				helper(node.left)
				helper(node.right)
			}
		}
		helper(node)

		return nodes
	}

	toArrayPostOrder(node) {
		const nodes = []

		function helper(node) {
			if (node !== null) {
				helper(node.left)
				helper(node.right)
				nodes.push(node.data)
			}
		}
		helper(node)

		return nodes
	}
}

const bst = new BinarySearchTree()
