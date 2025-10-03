import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostById, fetchComments } from './store/postsSli';
import { useParams, Link } from 'react-router-dom';
import { Spinner, Alert, Card, ListGroup, Button } from 'react-bootstrap';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { postDetail, comments, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPostById(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  if (loading) return <div className="text-center"><Spinner animation="border" /></div>;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!postDetail) return null;

  return (
    <div>
      <Button as={Link} to="/" variant="secondary" className="mb-3">← Quay về danh sách</Button>

      <Card className="mb-4 p-3 shadow-sm">
        <Card.Title>{postDetail.title}</Card.Title>
        <Card.Text>{postDetail.body}</Card.Text>
      </Card>

      <h5>Bình luận</h5>
      <ListGroup className="mb-4">
        {comments.map(comment => (
          <ListGroup.Item key={comment.id} className="mb-2 shadow-sm">
            <strong>{comment.name}</strong> ({comment.email})
            <p>{comment.body}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PostDetail;
