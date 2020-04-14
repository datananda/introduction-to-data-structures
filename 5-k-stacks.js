
/* Create a data structure KStacks that represents a set of k stacks. It should only use one array. The following methods must be supported by KStacks.

push(val, stackNumber) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
pop(stackNumber) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1
*/

class KStacks {
    constructor(k) {
        this._storage = [];
        this._numStacks = k;
        this._lastIndexes = [];
    }

    push(val, stackNumber) {
        let indexToInsert;

        //if first item pushed
        if (this._lastIndexes[stackNumber - 1]) {
            indexToInsert = stackNumber - 1;
        }
        //if not first item pushed
        else {
            indexToInsert = this._lastIndexes[stackNumber - 1] + this._numStacks;
        }

        this._storage[indexToInsert] = val;
        this._lastIndexes[stackNumber - 1] = indexToInsert;
    }
}

let myStack = new KStacks(3);
console.log(myStack);

myStack.push('a', 1);
console.log(myStack);