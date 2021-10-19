// 1.충돌을 고려하지 않은 hash table

const HASH_SIZE = 1013;

function Element(key, value) {
  this.key = key;
  this.value = value;
}

function HashTable() {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
}

HashTable.prototype.hashCode = function (key) {
  // djb2
  let hash = 5381;
  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i);
  }
  return hash % HASH_SIZE;
};

HashTable.prototype.put = function (key, value) {
  let index = this.hashCode(key);
  console.log(`key: ${key} -> index: ${index}`);

  // 충돌
  if (this.table[index] !== undefined) {
    return false;
  }

  this.table[index] = new Element(key, value);
  this.length++;

  return true;
};

HashTable.prototype.get = function (key) {
  return this.table[this.hashCode(key)];
};

HashTable.prototype.remove = function (key) {
  let element = this.table[this.hashCode(key)];

  if (element !== undefined) {
    delete this.table[this.hashCode(key)];
    this.length--;
  }
  return element;
};

HashTable.prototype.clear = function () {
  this.table = new Array(HASH_SIZE);
  this.length = 0;
};

HashTable.prototype.size = function () {
  return this.length;
};

HashTable.prototype.getBuffer = function () {
  let array = [];
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      array.push(this.table[i]);
    }
  }
  return array;
};

HashTable.prototype.print = function () {
  for (let i = 0; i < this.table.length; i++) {
    if (this.table[i]) {
      console.log(`${i} -> ${this.table[i].key} : ${this.table[i].value}`);
    }
  }
};

let ht = new HashTable();

ht.put("Ana", 172);
ht.put("Donnie", 183);
ht.put("Sue", 163);
ht.put("Jamie", 160);
ht.put("Paul", 180);

ht.print();
