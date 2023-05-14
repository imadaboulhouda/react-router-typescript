export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const cacheData: any = {};
export async function getPost(id: number): Promise<Post> {
  if (localStorage.hasOwnProperty("caches_post_" + id))
    return JSON.parse(localStorage["caches_post_" + id]);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const dataLast: Post = await data.json();
  cacheData["post" + id] = dataLast;
  localStorage.setItem("caches_post_" + id, JSON.stringify(dataLast));
  return dataLast;
}
export async function getAllPosts(): Promise<Post[]> {
  if (localStorage.hasOwnProperty("postsAll"))
    return JSON.parse(localStorage.postsAll);
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dataLast: Post[] = await data.json();
  localStorage.setItem("postsAll", JSON.stringify(dataLast));
  return dataLast;
}
