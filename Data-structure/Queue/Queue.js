//console.log(Object.getOwnPropertyDescriptors(Queue.prototype));

/* shift()는 시간복잡도가 O(N)이기 때문에 밑에서 index를 통한 최적화로 재정의
function Queue(array) {
  this.array = array ? array : [];
}

Queue.prototype.enqueue = function (ele) {
  return this.array.push(ele);
};

Queue.prototype.dequeue = function () {
  return this.array.shift();
};
*/

function Queue(array) {
  this.array = array ? array : [];
  this.tail = array ? array.length : 0;
  this.head = 0;
}

Queue.prototype.enqueue = function (ele) {
  return (this.array[this.tail++] = ele);
};

Queue.prototype.dequeue = function () {
  if (this.tail === this.head) return undefined;

  let ele = this.array[this.head];
  delete this.array[this.head++];
  return ele;
};

Queue.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

// 큐 초기화
Queue.prototype.clear = function () {
  this.array = [];
};

Queue.prototype.size = function () {
  return this.array.length;
};

Queue.prototype.getBuffer = function () {
  return this.array.slice();
};

Queue.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let q = new Queue([1, 2]);
console.log(q);
// Queue { array: [ 1, 2 ], tail: 2, head: 0 }

q.enqueue(3);
q.enqueue(4);
console.log(q);
// // Queue { array: [ 1, 2, 3, 4 ], tail: 4, head: 0 }

console.log(q.dequeue());
// 1
console.log(q.dequeue());
// 2
console.log(q);
// Queue { array: [ <2 empty items>, 3, 4 ], tail: 4, head: 2 }
