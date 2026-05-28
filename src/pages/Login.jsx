import "../styles/login.css";

function Login({ mudarTela }) {

  function handleLogin(e) {
    e.preventDefault();
    mudarTela("home");
  }

  return (
    <div className="auth-container">
      {/* Link superior direito */}
      <span className="register-link" onClick={() => mudarTela("cadastro")}>
        Cadastre-se agora
      </span>

      {/* Subtítulo explicativo externo */}
      <p className="login-subtitle">
        Digite o endereço de e-mail e a senha da sua conta Mindemy.
      </p>

      {/* Formulário de Login principal (Retângulo 95) */}
      <form className="auth-box" onSubmit={handleLogin}>
        <h1>Login</h1>

        <input 
          type="email"
          placeholder="Digite seu endereço de e-mail"
          required
        />

        <input 
          type="password"
          placeholder="Digite sua senha"
          required
          minLength="6"
        />

        <p className="signup-text" onClick={() => mudarTela("cadastro")}>
          Não tem conta? Cadastre-se
        </p>

        <p className="forgot-text" onClick={() => mudarTela("forgot")}>
          Esqueceu a senha?
        </p>

        <button type="submit">
          Entrar
        </button>
      </form>

      {/* Link inferior de ajuda */}
      <p className="help-link" onClick={() => mudarTela("forgot")}>
        Precisa de ajuda para entrar?
      </p>

      {/* Botão flutuante do Chatbot */}
      <button className="chatbot-btn" aria-label="Abrir Chatbot">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="#FFFFFF"/>
        </svg>
      </button>
    </div>
  );
}

export default Login;