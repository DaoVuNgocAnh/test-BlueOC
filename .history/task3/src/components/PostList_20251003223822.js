import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../redux/postsSlice';
import { Card, Spinner, Alert, Form, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginationComponent from './PaginationComponent';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Filter posts
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <>
      <h2 className="mb-4 text-center">📰 Trang tin tức</h2>

      <Form className="mb-4">
        <Form.Control
          type="text"
          placeholder="Tìm kiếm bài viết..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>

      {loading && <div className="text-center"><Spinner animation="border" /></div>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Row xs={1} md={2} lg={3} className="g-4">
        {currentPosts.map(post => (
          <Col key={post.id}>
            <Card className="h-100 shadow-sm hover-shadow">
              <Card.Body>
                <Card.Title>
                  <Link to={`/post/${post.id}`} className="text-decoration-none text-dark">
                    {post.title}
                  </Link>
                </Card.Title>
                <Card.Text>
                  {post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="d-flex justify-content-center mt-4">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default PostList;
