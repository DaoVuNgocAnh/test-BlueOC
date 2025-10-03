import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className="d-flex justify-content-center my-3">
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loading;
