import React from "react";
import { ListGroup } from "react-bootstrap";

function PostList({ posts, onSelectPost }) {
  return (
    <ListGroup>
      {posts.map((post) => (
        <ListGroup.Item
          key={post.id}
          action
          onClick={() => onSelectPost(post.id)}
        >
          {post.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default PostList;
