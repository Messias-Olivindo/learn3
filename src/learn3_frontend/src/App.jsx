import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login/index';
import Cadastro from './pages/Cadastro/index';
import Classes from './pages/Classes/index';
import ClassDetail from './pages/ClassDetail/index';
import Verification from './pages/Verification/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Verification />} />
        <Route path="/aulas" element={<Classes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/aula/:id" element={<ClassDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
