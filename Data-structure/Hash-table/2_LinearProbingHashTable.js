// 2.선형조사법 해시테이블
const HASH_SIZE = 5;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function LinearHashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

LinearHashTable.prototype.hashCode = function (key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

LinearHashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

LinearHashTable.prototype.size = function () {
  return this.length;
};

LinearHashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

LinearHashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
    }
  }
};

LinearHashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  let startIndex = index;
  console.log(`key: ${key} -> index: ${index}`);

  do {
    if (this.table[index] === undefined) {
      this.table[index] = new Element(key, value);
      this.length++;
      return true;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return false;
};

LinearHashTable.prototype.get = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      return this.table[index].value;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

LinearHashTable.prototype.remove = function (key) {
  let index = this.hashCode(key);
  let startIndex = index;

  do {
    if (this.table[index] !== undefined && this.table[index].key === key) {
      let element = this.table[index];
      delete this.table[index];
      this.length--;

      return element;
    }

    index = (index + 1) % HASH_SIZE;
  } while (index !== startIndex);

  return undefined;
};

let lht = new LinearHashTable();

lht.put("Ana", 172);
lht.put("John", 179);
lht.put("Donnie", 183);
lht.put("Mindy", 190);
lht.put("Paul", 168);
/*
key: Ana -> index: 2
key: John -> index: 4
key: Donnie -> index: 0
key: Mindy -> index: 3
key: Paul -> index: 2
*/

console.log(lht.remove("Ana"));
// Element { key: 'Ana', value: 172 }
console.log(lht.get("Paul"));
// 168
console.log(lht.remove("Paul"));
// Element { key: 'Paul', value: 168 }
console.log(lht.get("Paul"));
// undefined
