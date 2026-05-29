import "../styles/register.css";

function Register({ mudarTela }) {

  return (
    <div className="register-container">

      {/* LOGIN NO TOPO */}
      <span
        className="login-link"
        onClick={() => mudarTela("login")}
      >
        Fazer Login
      </span>

      {/* CONTEÚDO */}
      <div className="register-content">

        {/* TEXTO */}
        <div className="register-info">

          <h1>
            Invista no seu sucesso!
          </h1>

          <p>
            Crie sua conta agora e tenha acesso a cursos exclusivos,
            desenvolvidos por especialistas, para você dominar as
            habilidades mais requisitadas do mercado.

            Invista no seu futuro e aprenda no seu ritmo,
            com conteúdo de qualidade e atualizado.
            Não perca tempo, o futuro da tecnologia
            espera por você!
          </p>

        </div>

        {/* FORMULÁRIO */}
        <form className="register-box">

          <input
            type="text"
            placeholder="Nome do usuário"
          />

          <input
            type="email"
            placeholder="Endereço de e-mail"
          />

          <input
            type="text"
            placeholder="CPF"
          />

          <input
            type="password"
            placeholder="Senha"
          />

          <input
            type="password"
            placeholder="Confirmação de Senha"
          />

          <div className="register-buttons">

            <button type="submit">
              Cadastrar
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => mudarTela("login")}
            >
              Cancelar
            </button>

          </div>

        </form>

      </div>

      {/* CHATBOT */}
      <button className="chatbot-btn">

        <svg
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            fill="#FFFFFF"
          />

        </svg>

      </button>

    </div>
  );
}

export default Register;