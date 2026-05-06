import "../styles/login.css";

function ForgotPassword({mudarTela}){
    return(
        <div className="login-container">
            <form className="login-box">
                <h1>Recuperar Senha</h1>
                
                <input type="email" placeholder="Digite seu email"/>

                <button>Enviar link</button>

                <p onClick={() => mudarTela("login")}> volta ao Login</p>
            </form>
        </div>
    );
}

export default ForgotPassword;  