import React from "react";
import { Card, ListGroup } from "react-bootstrap";

function PostDetail({ post, comments }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>{post.body}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <h5>Bình luận</h5>
        <ListGroup variant="flush">
          {comments.map((cmt) => (
            <ListGroup.Item key={cmt.id}>
              <strong>{cmt.name}</strong> ({cmt.email})<br />
              {cmt.body}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Footer>
    </Card>
  );
}

export default PostDetail;
