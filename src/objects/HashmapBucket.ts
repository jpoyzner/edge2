import LinkedList from './LinkedList';

export default class HashmapBucket {
  hash: number;
  list: LinkedList;

  constructor(hash: number) {
    this.hash = hash;
    this.list = new LinkedList();
  }

  addValue(value: string) {
    this.list.addValue(value);
  }

  values(): string[] {
    return this.list.values();
  }
}