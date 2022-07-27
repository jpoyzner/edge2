export type Contact = {
  id: number;
  name: string;
  number: string;
  context: string;
  error?: boolean;
}

export type User = {
  id: number;
  username: string;
}

export type Post = {
  id: number;
  userId: number;
  user?: string;
  title: string;
  body: string;
}


