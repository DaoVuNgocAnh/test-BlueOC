import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../';
import { ListGroup, Spinner, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const firstTenPosts = posts.slice(0, 10);

  return (
    <div>
      <h2 className="mb-4 text-center">Danh sách bài viết</h2>
      {loading && <div className="text-center"><Spinner animation="border" /></div>}
      {error && <Alert variant="danger">{error}</Alert>}

      <ListGroup>
        {firstTenPosts.map(post => (
          <ListGroup.Item key={post.id}>
            <Card className="p-2 hover-shadow">
              <Link to={`/post/${post.id}`} className="text-decoration-none">{post.title}</Link>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default PostList;
