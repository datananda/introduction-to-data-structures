/** Class representing a Queue. */

class Queue {

    constructor() {
      this._storage = {};
      this._head;
      this._tail;
    }
    /*
    * Enqueues a new value at the end 
    * of the queue
    * @param {*} value - the value to 
    * enqueue
    */
    enqueue(value) {
        if (this._head === undefined) {
            this._head = 0;
            this._tail = 0;
            this._storage[0] = value;
        } else {
            this._storage[this._tail + 1] = value;
            this._tail++;
        }
    }
  
    /*
    * Dequeues the value from the beginning of the queue and returns it
    * @return {*} the first and oldest value in the queue
    */
    dequeue() {
        let dequeued = this._storage[this._head];
        delete this._storage[this._head];

        if (this._head === this._tail) {
            this._head = this._tail = undefined;
        } else {
            this._head++;
        }

        return dequeued;
    }
    /*
    * Returns the value at the beginning of the queue without removing it from the queue
    * @return {*} value the first and oldest value in the queue
    */
    peek() {
        return this._storage[this._head];
    }
  }

  const myQueue = new Queue();

//   console.log(myQueue);

//   myQueue.enqueue('first');
//   console.log(myQueue);
  
//   myQueue.enqueue('second');
  
//   console.log(myQueue);

//   console.log(myQueue.dequeue());

//   console.log(myQueue);

//   console.log(myQueue.peek());