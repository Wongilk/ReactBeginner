import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./route/Home";
import Detail from "./route/detail";
function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
