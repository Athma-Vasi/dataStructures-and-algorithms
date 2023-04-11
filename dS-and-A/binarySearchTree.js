class Node {
	constructor(data = null, left = null, right = null) {
		this.data = data
		this.left = left
		this.right = right
	}
}

class BinarySearchTree {
	constructor(root = null) {
		this.root = root
	}

	//accessors
	get rootNode() {
		return this.root
	}

	insert(data) {
		const newNode = new Node(data)

		this.root === null ? (this.root = newNode) : this.insertNode(this.root, newNode)
	}

	insertNode(node, newNode) {
		//if data is less than node, move left
		if (newNode.data < node.data) {
			//if left node is a leaf node, insert data here
			//else recurr until a leaf node is found and then insert
			node.left === null ? (node.left = newNode) : this.insertNode(node.left, newNode)
		}
		//if data is greater than node, move right
		else {
			//if right node is a leaf node, insert data here
			//else recurr until a leaf node is found, then insert
			node.right === null ? (node.right = newNode) : this.insertNode(node.right, newNode)
		}
	}

	remove(data) {
		// root is re-initialized with root of a modified tree
		this.root = this.removeNode(this.root, data)
	}

	removeNode(node, key) {
		//if root is null, tree is empty
		if (node === null) return null
		//if data is less than root's data, move to left sub-tree
		else if (key < node.data) {
			node.left = this.removeNode(node.left, key)
			return node
		}
		//if data is greater than root's data, move to right sub-tree
		else if (key > node.data) {
			node.right = this.removeNode(node.right, key)
			return node
		}
		//if data is similar to root's data, delete this node
		else {
			//if node is leaf node ( meaning no children )
			if (node.left === null && node.right === null) {
				node = null
				return node
			}

			//if node has only one child - right
			if (node.left === null) {
				node = node.right
				return node
			}
			//if node has only one child - left
			else if (node.right === null) {
				node = node.left
				return node
			}
		}

		/**
		 * In order to delete a node with two children we find the node with minimum value in its right subtree and replace this node with the minimum valued node and remove the minimum valued node from the tree
		 */

		//deleting a node with two children
		//minimum node of right sub-tree is stored in aux
		const aux = this.findMinNode(node.right)
		node.data = aux.data

		node.right = this.removeNode(node.right, aux.data)
		return node
	}

	findMinNode(node) {
		//if left child of node is null ( meaning node is leaf ), it must be the min
		return node.left === null ? node : this.findMinNode(node.left)
	}

	/**Search */
	search(node, data) {
		if (node === null) return null
		//if data is less than node's data, move left
		else if (data < node.data) {
			return this.search(node.left, data)
		}
		//if data is greater than node's data, move right
		else if (data > node.data) {
			return this.search(node.right, data)
		}
		//if data is equal to node's data
		else if (data === node.data) return node
		//if data is not present, return null
		return null
	}

	/**Traversals */
	//in-order: left-subtree->root->right sub-tree
	inOrder(node = this.root) {
		if (node !== null) {
			this.inOrder(node.left)
			console.log(node.data)
			this.inOrder(node.right)
		}
	}

	//pre-order: root->left sub-tree->right sub-tree
	preOrder(node = this.root) {
		if (node !== null) {
			console.log(node.data)
			this.preOrder(node.left)
			this.preOrder(node.right)
		}
	}

	//post-order: left sub-tree->right sub-tree->root
	postOrder(node = this.root) {
		if (node !== null) {
			this.postOrder(node.left)
			this.postOrder(node.right)
			console.log(node.data)
		}
	}

	toArrayInOrder(node = this.root) {
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

	toArrayPreOrder(node = this.root) {
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

	toArrayPostOrder(node = this.root) {
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

	/**
    If the node is null, we return 0 as it does not add any depth
    
    Else we add + 1 to our current depth (we traversed one level)
    
    Recursively calculate the depth of node's children and return the maximum sum between node.left and node.right
   */
	maxDepth(node = this.root) {
		const calc = (node) =>
			!node ? 0 : Math.max(1 + calc(node.left, 1 + calc(node.right)))

		return calc(root)
	}
}

const BST = new BinarySearchTree()

BST.insert(15)
BST.insert(25)
BST.insert(10)
BST.insert(7)
BST.insert(22)
BST.insert(17)
BST.insert(13)
BST.insert(5)
BST.insert(9)
BST.insert(27)

console.log(BST)
const root = BST.rootNode
BST.inOrder(root)
console.log('\n\n')
console.log(BST.maxDepth())
console.log(BST.toArrayInOrder(root))
console.log(BST.toArrayPreOrder(root))
console.log(BST.toArrayPostOrder(root))

/*
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
*/
