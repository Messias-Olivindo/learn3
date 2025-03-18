import { learn3_backend } from '../../../../declarations/learn3_backend';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginImg from '../../assets/bgLogin.svg';
import '../Cadastro/style.css';

function index() {
  const location = useLocation();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const email = form.email.value;
    const password = form.password.value;
    
    try {
      const response = await learn3_backend.verificarUsuario(email, password);
      if (response) {
        navigate("/aulas");
      } else {
        alert("Email ou senha inválidos!");
      }
    } catch (error) {
      console.error("Error verifying user:", error);
      alert("Ocorreu um erro. Por favor, tente novamente.");
    }
  }

  return (
    <main className='login-container'>
      <div className="left">
        <img src={LoginImg} alt="" />
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
          </div>

          <div className="bottom">
            <button>
              Entrar
            </button>
            <Link to={"/cadastro"}>
              Criar conta
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default index;
