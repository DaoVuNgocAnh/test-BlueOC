import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';

function App() {
  return (
    <Router>
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
