import ListNode from './ListNode';

export default class LinkedList {
  head: ListNode | null;

  constructor(head?: ListNode) {
    this.head = head || null;
  }

  addValue(value: string): void {
    if (!this.head) {
        this.head = new ListNode(value);
        return;
    }

    let current: ListNode = this.head;
    while (current.next) {
        current = current.next;
    }

    current.next = new ListNode(value);
  }

  values(): string[] {
    if (!this.head) {
        return [];
    }

    let current: ListNode = this.head;
    const values: string[] = [current.data];
    while (current.next) {
        current = current.next;
        values.push(current.data);
    }

    return values;
  }
}