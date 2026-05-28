import "../styles/register.css";

function Register({ mudarTela }) {

  return (
    <div className="register-container">

      
      <img
        src="/src/assets/logo.svg"
        alt="Logo"
        className="register-logo"
      />

     
      <form className="register-box">

        <h1>Crie sua conta</h1>

        <p className="register-subtitle">
          Cadastre-se na Mindemy e comece sua jornada.
        </p>

        <input
          type="text"
          placeholder="Seu nome"
        />

        <input
          type="email"
          placeholder="Endereço de e-mail"
        />

        <input
          type="password"
          placeholder="Crie uma senha"
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
  );
}

export default Register;