/** Class representing a Stack. */

class Stack {

    constructor() {
      this._storage = {};
      this._last;
    }
    /*
    * Adds a new value at the end of the stack
    * @param {*} value the value to push
    */
    push(value) {
        if (this._last === undefined) {
            this._storage[0] = value;
            this._last = 0;
        } else {
            this._storage[this._last + 1] = value;
            this._last++;          
        }
    }
  
    /*
    * Removes the value at the end of the stack and returns it
    * @return {*} the last and newest value in the stack
    */
    pop() {
        let popped = this._storage[this._last];
        delete this._storage[this._last];

        if (this._last === 0) {
            this._last = undefined;
        } else {
            this._last--;
        }

        return popped;
    }
    /*
    * Returns the value at the end of the stack without removing it
    * @return {*} the last and newest value in the stack
    */
    peek() {
        return this._storage[this._last];
    }
  }
  
  const myStack = new Stack();
  
//   console.log(myStack);
  
//   myStack.push(16);

//   console.log(myStack);

//   myStack.push(5);

//   console.log(myStack);

//   console.log(myStack.pop());

//   console.log(myStack);

//   console.log(myStack.peek());