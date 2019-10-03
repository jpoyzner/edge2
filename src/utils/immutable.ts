export interface MapType<T, K, V> extends Map<K, V> {
  toJS(): T;
  get<I extends keyof T>(key: I & K): T[I] & V;
  set<S extends keyof T>(key: S & K, value: T[S] & V): this;
}