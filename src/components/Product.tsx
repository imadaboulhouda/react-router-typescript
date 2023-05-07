import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost, Post as IPost } from "../api/PostApi";

function Product() {
  const { id } = useParams();

  const [post, setPost] = useState<IPost>({} as IPost);
  useEffect(() => {
    const f = async () => {
      if (id) {
        let data: IPost = await getPost(parseInt(id));
        setPost(data);
      }
    };
    f();
  }, []);

  return (
    <>
      <div key={post.id}>
        <b>{post.title}</b>
        <p>{post.body}</p>
      </div>
    </>
  );
}

export default Product;
