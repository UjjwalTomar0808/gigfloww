import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./pages/export";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.auth />} />
        {/* <Route path="/register" element={<Pages.register />} /> */}
        <Route path="/dashboard" element={<Pages.dashboard />} />
        <Route path="/People" element={<Pages.people />} />
        <Route path="/Hiring" element={<Pages.hiring />} />
        <Route path="/Salary" element={<Pages.salary />} />
        <Route path="/Reviews" element={<Pages.review />} />
      </Routes>
    </Router>
  );
};

export default App;