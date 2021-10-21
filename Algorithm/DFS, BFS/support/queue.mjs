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

export { Queue };
