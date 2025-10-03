import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setPage } from '../store/postSlice';
import { Link } from 'react-router-dom';
import { Spinner, Alert, ListGroup, Pagination } from 'react-bootstrap';

const PostList = () => {
  const dispatch = useDispatch();
  const { list, loading, error, currentPage, postsPerPage } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  // Pagination
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = list.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(list.length / postsPerPage);

  return (
    <>
      <ListGroup>
        {currentPosts.map((post) => (
          <ListGroup.Item key={post.id}>
            <Link to={`/post/${post.id}`} style={{ textDecoration: 'none' }}>
              {post.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Pagination */}
      <Pagination className="mt-3 justify-content-center">
        {[...Array(totalPages)].map((_, i) => (
          <Pagination.Item
            key={i+1}
            active={i+1 === currentPage}
            onClick={() => dispatch(setPage(i+1))}
          >
            {i+1}
          </Pagination.Item>
        ))}
      </Pagination>
    </>
  );
};

export default PostList;
