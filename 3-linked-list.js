class Node {
    constructor(value) {
        this._value = value;
        this._nextIndex;
    }
}

class LinkedList {

    constructor() {
      this._storage = {};
      this._headIndex;
      this._tailIndex;
    }
    /*
    * Inserts a new value to the end of the linked list
    * @param {*} value - the value to insert
    */
    insert(value) {
        if (this._headIndex === undefined) {
            this._storage[0] = new Node(value);
            this._headIndex = this._tailIndex = 0;
        } else {
            this._storage[this._tailIndex].nextIndex = this._tailIndex + 1;
            this._storage[this._tailIndex + 1] = new Node(value);
            this._tailIndex++;
        }
    }
    /*
    * Deletes a node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */
    remove() {
  
    }
    /*
    * Removes the value at the end of the linked list
    * @return {*} - the removed value
    */
    removeTail() {

    }
    /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    contains() {
  
    }  
    /*
    * Checks if a node is the head of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the head, otherwise false
    */
    isHead() {
  
    }
    /*
    * Checks if a node is the tail of the linked list 
    * @param {{prev:Object|null, next:Object|null}} node - the node to check
    * @return {boolean} - true if node is the tail, otherwise false
    */
    isTail() {
  
    }
  }