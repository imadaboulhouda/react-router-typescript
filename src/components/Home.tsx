import React, { useEffect, useState } from "react";

import { getAllPosts, Post as IPost } from "../api/PostApi";
import { Link } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState<IPost[]>();
  useEffect(() => {
    const f = async () => {
      let data: IPost[] = await getAllPosts();
      setPosts(data);
    };
    f();
  }, []);

  return (
    <div className="d-flex flex-wrap gap-5">
      {posts?.map(function (item) {
        return (
          <div key={item.id} className="card mb-5" style={{ width: "18rem" }}>
            <img
              alt="test"
              className="card-img-top"
              src="https://placehold.it/200x200"
            />
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <Link to={"/" + item.id}>{item.title}</Link>
              </h5>
              <p className="card-text">{item.body.substring(0, 20) + "..."}</p>
              <Link to={"/" + item.id} className="btn btn-primary">
                Voir Plus
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
