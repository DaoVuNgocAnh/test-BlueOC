import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostDetail } from '../store/postSlice';
import { useParams, Link } from 'react-router-dom';
import { Spinner, Alert, Card, Button, ListGroup } from 'react-bootstrap';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { detail, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostDetail(id));
  }, [dispatch, id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!detail) return null;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{detail.title}</Card.Title>
        <Card.Text>{detail.body}</Card.Text>
        <h5>Bình luận:</h5>
        <ListGroup>
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
