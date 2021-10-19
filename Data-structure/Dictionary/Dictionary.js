function Dictionary(items = {}) {
  this.items = items;
}

Dictionary.prototype.getBuffer = function () {
  return { ...this.items };
};

Dictionary.prototype.clear = function () {
  this.items = {};
};

Dictionary.prototype.size = function () {
  return Object.keys(this.items).length;
};

Dictionary.prototype.has = function (key) {
  //return value in this.items;
  return this.items.hasOwnProperty(key);
};

Dictionary.prototype.set = function (key, value) {
  this.items[key] = value;
};

Dictionary.prototype.get = function (key) {
  return this.has(key) ? this.items[key] : undefined;
};

Dictionary.prototype.remove = function (key) {
  if (this.has(key)) {
    delete this.items[key];
    return true;
  }
  return false;
};

Dictionary.prototype.keys = function () {
  return Object.keys(this.items);
};

Dictionary.prototype.values = function () {
  //return Object.values(this.items);
  let values = [];
  for (let k in this.items) {
    values.push(this.items[k]);
  }
  return values;
};

Dictionary.prototype.each = function (fn) {
  for (let k in this.items) {
    fn(k, this.items[k]);
  }
};

function printDictionary(key, value) {
  console.log(`key: ${key}, value: ${value}`);
}

let dict = new Dictionary();
dict.set("age", 19);
dict.set("name", "alice");
dict.set("height", 172);
console.log(dict);
// Dictionary { items: { age: 19, name: 'alice', height: 172 } }

dict.remove("age");
console.log(dict);
// Dictionary { items: { name: 'alice', height: 172 } }

console.log(dict.has("age"));
// false

dict.each(printDictionary);
// key: name, value: alice
// key: height, value: 172
