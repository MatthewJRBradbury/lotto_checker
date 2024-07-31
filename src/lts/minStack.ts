interface StackItem {
  val: number;
  min: number;
}

class MinStack {
  private stack: StackItem[];
  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    this.stack.push({
      val,
      min: this.stack.length == 0 ? val : Math.min(val, this.getMin()),
    });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min ?? 0;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export const minStackCall = () => {
  const ans = [];
  const minStack = new MinStack();
  ans.push(null);
  minStack.push(-2);
  ans.push(null);
  minStack.push(0);
  ans.push(null);
  minStack.push(-3);
  ans.push(null);
  ans.push(minStack.getMin()); // return -3
  ans.push(minStack.pop());
  ans.push(minStack.top()); // return 0
  ans.push(minStack.getMin()); // return -2

  return ans;
};
