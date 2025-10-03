import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, setPage } from "../store/postSlice";
import { Link } from "react-router-dom";
import { Card, ListGroup, Spinner, Alert, Pagination, InputGroup, FormControl } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const { list, loading, error, currentPage, postsPerPage } = useSelector((state) => state.posts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <Spinner animation="border" className="d-block mx-auto" />;
  if (error) return <Alert variant="danger">{error}</Alert>;

  // Lọc theo search
  const filteredPosts = list.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()));

  // Phân trang
  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <h5 className="mb-3 text-center">Danh sách bài viết</h5>

        {/* Search */}
        <InputGroup className="mb-3">
          <FormControl
            placeholder="Tìm kiếm bài viết..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              dispatch(setPage(1));
            }}
          />
        </InputGroup>

        {/* List bài viết */}
        <ListGroup variant="flush">
          {currentPosts.map((post) => (
            <ListGroup.Item key={post.id} className="text-truncate">
              <Link to={`/post/${post.id}`} style={{ textDecoration: "none" }}>
                {post.title}
              </Link>
            </ListGroup.Item>
          ))}
        </ListGroup>

        {/* Pagination ngang */}
        {totalPages > 1 && (
          <Pagination className="mt-3 justify-content-center">
            {[...Array(totalPages)].map((_, i) => (
              <Pagination.Item
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => dispatch(setPage(i + 1))}
              >
                {i + 1}
              </Pagination.Item>
            ))}
          </Pagination>
        )}
      </Card.Body>
    </Card>
  );
};

export default PostList;
