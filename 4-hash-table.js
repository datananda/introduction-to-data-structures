/** Class representing a Hash Table */

class HashTable {
    constructor(size) {
      this._storage = [];
      this._size = size;
    }
    /*
    * Inserts a new key-value pair
    * @param {string} key - the key associated with the value
    * @param {*} value - the value to insert
    */
    insert(key, val) {
        const index = this._hash(key, this._size);

        if (!this._storage[index]) {
            this._storage[index] = [];
        }
        this._storage[index].push([key, val]);
    }
    /*
    * Deletes a key-value pair
    * @param {string} key - the key associated with the value
    * @return {*} value - the deleted value
    */
    remove(key) {
        let allItemsAtIndex = this._storage[this._hash(key, this._size)];
        for (let i = 0; i < allItemsAtIndex.length; i++) {
            if (allItemsAtIndex[i][0] === key) {
                let val = allItemsAtIndex[i][1];
                allItemsAtIndex.splice(i, 1);

                return val;
            }
        }      
    }
    /*
    * Returns the value associated with a key
    * @param {string} key - the key to search for
    * @return {*} - the value associated with the key
    */
    retrieve(key) {
        let allItemsAtIndex = this._storage[this._hash(key, this._size)];
        return allItemsAtIndex.filter(elem => elem[0] === key)[0][1];
    }  
    /*
    * Hashes string value into an integer that can be mapped to an array index
    * @param {string} str - the string to be hashed
    * @param {number} n - the size of the storage array
    * @return {number} - an integer between 0 and n
    */
    _hash(str, n) {
      let sum = 0;
      for (let i = 0; i < str.length; i++)
          sum += str.charCodeAt(i) * 3
  
      return sum % n;
    }

}

const myHash = new HashTable(100);

// {_storage: [], _size: 100}

myHash.insert('hello', 1);

// {_storage: [,,...,@ index _hash('hello',this._size) ['hello', 1],,]}