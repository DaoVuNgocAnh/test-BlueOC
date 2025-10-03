import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container className="mt-4">
        <h2 className="mb-4 text-center">📚 Danh sách bài viết</h2>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Container className="mt-4">
        <h2 className="mb-4 text-center">📚 Danh sách bài viết</h2>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
