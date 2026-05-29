import "../styles/login.css";

function ForgotPassword({ mudarTela }) {

    return (
        <div className="forgot-container">

            <img
                src="/src/assets/logo.svg"
                alt="Logo Mindemy"
                className="forgot-logo"
            />

            <div className="forgot-content">

                <h1>Redefina sua senha</h1>

                <p className="forgot-subtitle">
                    Digite o endereço de e-mail que você usa na Mindemy
                    para enviarmos um link de redefinição de senha.
                </p>

                <form className="forgot-form">

                    <label>Endereço de e-mail</label>

                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                    />

                    <div className="forgot-buttons">

                        <button type="submit">
                            Enviar
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

        </div>
    );
}

export default ForgotPassword;