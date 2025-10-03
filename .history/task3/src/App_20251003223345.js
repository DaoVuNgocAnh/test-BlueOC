import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* Navbar */}
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">📰 Tin tức React</Navbar.Brand>
        </Container>
      </Navbar>

      {/* Bố cục 2 cột */}
      <Container>
        <Row>
          {/* Cột trái: danh sách bài viết */}
          <Col md={4} className="mb-4">
            <PostList />
          </Col>

          {/* Cột phải: chi tiết bài viết */}
          <Col md={8}>
            <Routes>
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/" element={<p className="text-center mt-4">Chọn một bài viết để xem chi tiết</p>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
