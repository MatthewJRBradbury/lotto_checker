class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
}

function stringifyLinkedList(head: ListNode | null): number[] {
  const result = [];
  let currentNode = head;

  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next; // Move to the next node
  }

  return result;
}

export const callMergeTwoLists = (
  l1: ListNode | null,
  l2: ListNode | null
): string => {
  const ans = mergeTwoLists(l1, l2);
  return stringifyLinkedList(ans).toString();
};
