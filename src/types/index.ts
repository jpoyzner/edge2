//for type checking individual properties on Immutable Map
export interface MapType<T, K, V> extends Map<K, V> {
  toJS(): T;
  get<I extends keyof T>(key: I & K): T[I] & V;
  set<S extends keyof T>(key: S & K, value: T[S] & V): this;
}

export type ContactPOJO = {
  id: number,
  name: string;
  number: string;
  context: string;
  error?: boolean;
}

export type Contact = MapType<ContactPOJO, string, any>;

export type UserPOJO = {
  id: number;
  username: string;
}

export type PostPOJO = {
  id: number;
  userId: number;
  user?: string;
  title: string;
  body: string;
}

export type Post = MapType<PostPOJO, string, any>;

export interface Action {
	type: string;
	data?: any;
}



