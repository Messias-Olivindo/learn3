import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/index';
import Tarefas from './tarefas';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tarefas/" element={<Tarefas />} />
      </Routes>
    </Router>
  );
}

export default App;
