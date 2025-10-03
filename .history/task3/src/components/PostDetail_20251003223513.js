import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetail } from "../store/postSlice";
import { useParams, Link } from "react-router-dom";
import { Card, Spinner, Alert, ListGroup, Button } from "react-bootstrap";

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, [dispatch, id]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-4" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!detail) return null;

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text>{detail.body}</Card.Text>

        <h6 className="mt-4">💬 Bình luận</h6>
        <ListGroup variant="flush">
          {detail.comments?.map((c) => (
            <ListGroup.Item key={c.id}>
              <strong>{c.name}</strong>: {c.body}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <Link to="/">
          <Button variant="secondary" className="mt-3">⬅ Quay lại</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostDetail;
