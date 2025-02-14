//Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

// Step 2 & 3: Create nodes and link them together
const head = new ListNode(3); // Start of our linked list
head.next = new ListNode(2);
head.next.next = new ListNode(0);
head.next.next.next = new ListNode(-4);
head.next.next.next.next = head.next;

export const hasCycle = (): string => {
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) {
      return 'true';
    }
  }

  return 'false';
};
