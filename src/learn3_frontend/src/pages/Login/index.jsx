import { Link } from 'react-router-dom';
// import LoginImg from './assets/login.svg';
import './style.css';

function index() {

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <main className='login-container'>
      <div className="left">
        {/* <img src={LoginImg} alt="" /> */}
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="top">
            <div className='top-buttons'>
              <Link to={"/"}>Entrar</Link>
              <Link to={"/cadastro"}>Criar Conta</Link>
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="" />
            </div>
            <div className="field">
              <label htmlFor="password">Senha</label>
              <input type="password" name="" id="" />
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