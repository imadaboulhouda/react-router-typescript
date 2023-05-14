export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPost(id: number): Promise<Post> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const dataLast: Post = await data.json();
  return dataLast;
}
export async function getAllPosts(): Promise<Post[]> {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataLast: Post[] = await data.json();
  return dataLast;
}
