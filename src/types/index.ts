//for type checking individual properties on Immutable Map
export interface MapType<T, K, V> extends Map<K, V> {
  toJS(): T;
  get<I extends keyof T>(key: I & K): T[I] & V;
  set<S extends keyof T>(key: S & K, value: T[S] & V): this;
}

export type Contact = MapType<{
  name: string;
  number: number;
  context: string;
  error: boolean;
}, string, any>;

export type Post = MapType<{
  id: number;
  user: string;
  title: string;
  body: string;
}, string, any>;

export interface Action {
	type: string;
	data?: object;
}



