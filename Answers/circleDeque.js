/**
 * 设计一个循环双端队列
 * https://leetcode-cn.com/problems/design-circular-deque/
 */

/**
 * Initialize your data structure here. Set the size of the deque to be k.
 * @param {number} k
 */
var MyCircularDeque = function(k) {
  this.len = k;
  this.dStack = [];
};

/**
* Adds an item at the front of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.dStack.length === this.len) return false;
  this.dStack.unshift(value);
  return true;
};

/**
* Adds an item at the rear of Deque. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.dStack.length === this.len) return false;
  this.dStack.push(value);
  return true;
};

/**
* Deletes an item from the front of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteFront = function() {
  if (this.dStack.length === 0) return false;
  this.dStack.shift();
  return true;
};

/**
* Deletes an item from the rear of Deque. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularDeque.prototype.deleteLast = function() {
  if (this.dStack.length === 0) return false;
  this.dStack.pop();
  return true;
};

/**
* Get the front item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getFront = function() {
  if (this.dStack.length === 0) return -1;
  return this.dStack[0];
};

/**
* Get the last item from the deque.
* @return {number}
*/
MyCircularDeque.prototype.getRear = function() {
  if (this.dStack.length === 0) return -1;
  return this.dStack[this.dStack.length - 1];
};

/**
* Checks whether the circular deque is empty or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isEmpty = function() {
  return this.dStack.length === 0;
};

/**
* Checks whether the circular deque is full or not.
* @return {boolean}
*/
MyCircularDeque.prototype.isFull = function() {
  return this.dStack.length === this.len;
};


// Your MyCircularDeque object will be instantiated and called as such:
var obj = new MyCircularDeque(8)
console.log(obj.insertFront(5))
console.log(obj.getFront())
console.log(obj.isEmpty())
console.log(obj.deleteFront())
console.log(obj.insertLast(3))
console.log(obj.getRear())
console.log(obj.insertLast(7))
console.log(obj.insertFront(7))
console.log(obj.deleteLast())
console.log(obj.insertLast(4))
console.log(obj.isEmpty())
