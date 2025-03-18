import { Link, useLocation, useNavigate } from 'react-router-dom';
import CadastroImg from '../../assets/bgCadastro.svg';
import './style.css';

function index() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    alert("Criando conta...");
    navigate("/login");
  }

  return (
    <main className='login-container'>
      <div className="left">
        <img src={CadastroImg} alt="" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="top">
            <div className='top-buttons'>
              <Link
                to={"/login"}
                style={{
                  fontWeight: location.pathname === "/login" ? "bold" : "normal",
                  color: location.pathname === '/login' ? 'black' : '#555',
                  borderBottomColor: location.pathname === '/login' ? 'blue' : 'black'
                }}
              >
                Entrar
              </Link>
              <Link
                to={"/cadastro"}
                style={{
                  fontWeight: location.pathname === "/cadastro" ? "bold" : "normal",
                  color: location.pathname === '/cadastro' ? 'black' : '#555',
                  borderBottomColor: location.pathname === '/cadastro' ? 'blue' : 'black'
                }}
              >
                Criar Conta
              </Link>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input type="password" id="password" />
            </div>
            <div className="field">
              <label htmlFor="confirm_password">Confirmar senha</label>
              <input type="password" id="confirm_password" />
            </div>
            <div className="field">
              <label htmlFor="github">Github</label>
              <input type="text" id="github" />
            </div>
          </div>

          <div className="bottom">
            <button>
              Criar conta
            </button>
            <Link to={"/login"} style={{ color: 'blue' }}>
              Entrar
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default index;