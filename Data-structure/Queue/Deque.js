function Deque(array = []) {
  this.array = array;
}

Deque.prototype.pushFront = function (e) {
  return this.array.unshift(e);
};

Deque.prototype.popFront = function () {
  return this.array.shift();
};

Deque.prototype.pushBack = function (e) {
  return this.array.push(e);
};

Deque.prototype.popBack = function () {
  return this.array.pop();
};

Deque.prototype.front = function () {
  return this.array.length === 0 ? undefined : this.array[0];
};

Deque.prototype.back = function () {
  return this.array.length === 0
    ? undefined
    : this.array[this.array.length - 1];
};

Deque.prototype.size = function () {
  return this.array.length;
};

Deque.prototype.clear = function () {
  this.array = [];
};

Deque.prototype.getBuffer = function () {
  return this.array.slice();
};

Deque.prototype.isEmpty = function () {
  return this.array.length === 0;
};

let dq = new Deque([1, 2]);
dq.pushBack(3);
console.log(dq);
// Deque { array: [ 1, 2, 3 ] }

console.log(dq.front());
// 1
console.log(dq.back());
// 3
console.log(dq.size());
// 3

dq.popFront();
console.log(dq);
// Deque { array: [ 2, 3 ] }

dq.popBack();
console.log(dq);
// Deque { array: [ 2 ] }
