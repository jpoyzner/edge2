export default class ListNode {
  data: string;
  next: ListNode | null;

  constructor(data: string) {
    this.data = data;
    this.next = null;              
  }
}