import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container, Row, Col, Navbar } from "react-bootstrap";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">📰 Tin tức React</Navbar.Brand>
        </Container>
      </Navbar>

      <Container>
        <Row>
          {/* Cột danh sách bài viết */}
          <Col md={4} className="mb-4">
            <h5 className="mb-3 text-center">Danh sách bài viết</h5>
            <PostList />
          </Col>

          {/* Cột chi tiết bài viết */}
          <Col md={8}>
            <Routes>
              <Route path="/post/:id" element={<PostDetail />} />
              <Route path="/" element={<p>Chọn một bài viết để xem chi tiết</p>} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
