import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseBuilder from "./pages/CourseBuilder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CourseBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;
