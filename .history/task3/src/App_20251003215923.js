import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Lấy danh sách bài viết
  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.slice(0, 10)); // chỉ lấy 10 bài
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể tải dữ liệu!");
        setLoading(false);
      });
  }, []);

  // Khi chọn 1 bài viết
  const handleSelectPost = (postId) => {
    setLoading(true);
    Promise.all([
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) =>
        res.json()
      ),
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(
        (res) => res.json()
      ),
    ])
      .then(([postDetail, postComments]) => {
        setSelectedPost(postDetail);
        setComments(postComments);
        setLoading(false);
      })
      .catch(() => {
        setError("Không thể tải chi tiết bài viết!");
        setLoading(false);
      });
  };

  return (
    <Container fluid className="p-4">
      <Row>
        <Col md={4}>
          <h2 className="mb-3">Danh sách bài viết</h2>
          {loading && <Loading />}
          {error && <Error message={error} />}
          <PostList posts={posts} onSelectPost={handleSelectPost} />
        </Col>
        <Col md={8}>
          {selectedPost ? (
            <PostDetail post={selectedPost} comments={comments} />
          ) : (
            <p>👉 Hãy chọn một bài viết để xem chi tiết</p>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
