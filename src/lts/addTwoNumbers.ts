export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

export const addTwoNumbers = (
  l1: ListNode | null | undefined,
  l2: ListNode | null | undefined
): string | null => {
  const dummyHead = new ListNode();
  let current = dummyHead;
  let carry = 0;
  while (l1 || l2) {
    const sum = carry + (l1?.val ?? 0) + (l2?.val ?? 0);
    const node = new ListNode(sum % 10);
    carry = Math.floor(sum / 10);
    current.next = node;
    current = current.next;
    l1 = l1?.next;
    l2 = l2?.next;
  }
  if (carry) {
    current.next = new ListNode(carry);
  }

  // Convert the resulting list to a string
  let resultString = '';
  let currentNode = dummyHead.next; // Start from the next of dummyHead since it's just a placeholder
  while (currentNode !== null) {
    resultString += currentNode.val.toString();
    currentNode = currentNode.next;
  }

  return resultString;
  // return dummyHead.next;
};
