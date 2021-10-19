// array, size의 초기값을 설정해줘야함
const DEFAULT_SIZE = 5;
function CircularQueue(array = [], size = DEFAULT_SIZE) {
  this.array = array;
  this.size = array.length > size ? array.length : size;
  this.length = array.length;
  this.head = 0;
  this.tail = array.length;
}

CircularQueue.prototype.enqueue = function (e) {
  if (this.isFull()) return false;

  this.array[this.tail] = e;
  // 중요
  this.tail = (this.tail + 1) % this.size;
  this.length++;

  return true;
};

CircularQueue.prototype.dequeue = function () {
  if (this.isEmpty()) return undefined;

  let e = this.array[this.head];
  delete this.array[this.head];
  // 중요
  this.head = (this.head + 1) % this.size;
  this.length--;

  return e;
};

CircularQueue.prototype.front = function () {
  return this.length == 0 ? undefined : this.array[this.head];
};

CircularQueue.prototype.dataSize = function () {
  return this.length;
};

CircularQueue.prototype.clear = function (size = DEFAULT_SIZE) {
  this.array = [];
  this.size = size;
  this.length = 0;
  this.head = 0;
  this.tail = 0;
};

CircularQueue.prototype.getBuffer = function () {
  return this.array.slice();
};

CircularQueue.prototype.isEmpty = function () {
  return this.length == 0;
};

CircularQueue.prototype.isFull = function () {
  return this.length == this.size;
};

let cq = new CircularQueue([1, 2, 3, 4]);

cq.enqueue(5);
cq.enqueue(6);
console.log(cq.dequeue());
// 1
console.log(cq.dequeue());
// 2
console.log(cq);
/*
CircularQueue {
  array: [ <2 empty items>, 3, 4, 5 ],
  size: 5,
  length: 3,
  head: 2,
  tail: 0
}
*/

cq.enqueue(6);
console.log(cq);
/*
CircularQueue {
  array: [ 6, <1 empty item>, 3, 4, 5 ],
  size: 5,
  length: 4,
  head: 2,
  tail: 1
}
*/
console.log(cq.front());
// 3
console.log(cq.dataSize());
// 4
