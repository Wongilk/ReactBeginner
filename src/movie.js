import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/detail";
function Movie() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
export default Movie;
