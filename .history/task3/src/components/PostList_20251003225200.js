import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/postsSlice';
import { ListGroup, Spinner, Alert, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginationComponent from './PaginationComponent';

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Lấy bài viết cho trang hiện tại
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div>
      <h2 className="mb-4 text-center">Danh sách bài viết</h2>
      {loading && <div className="text-center"><Spinner animation="border" /></div>}
      {error && <Alert variant="danger">{error}</Alert>}

      <ListGroup>
        {currentPosts.map(post => (
          <ListGroup.Item key={post.id}>
            <Card className="p-2 hover-shadow">
              <Link to={`/post/${post.id}`} className="text-decoration-none">
                {post.title}
              </Link>
            </Card>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="mt-3">
        <PaginationComponent
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PostList;
