import "../styles/login.css";

function Login({ mudarTela }) {

  function handleLogin(e) {
    e.preventDefault(); // 🚨 ISSO AQUI É O MAIS IMPORTANTE
    mudarTela("home");
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleLogin}>
        <h1>Login</h1>

        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar</button>

        <p onClick={() => mudarTela("cadastro")}>
          Não tem conta? Cadastre-se
        </p>

        <p onClick={() => mudarTela("forgot")}>
          Esqueceu a senha?
        </p>
      </form>
    </div>
  );
}

export default Login;