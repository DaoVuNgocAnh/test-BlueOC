import React from "react";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">📰 Tin tức React</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="mb-3 text-center">Danh sách bài viết</h5>
            <PostList />
          </Col>

          <Col md={8}>
            <Routes>
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/" element={<p>Chọn một bài viết để xem chi tiết</p>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
