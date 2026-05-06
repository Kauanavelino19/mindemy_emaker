import "../styles/register.css";

function Register({mudarTela}){
    return (
        <div className="register-container">
            <form className="register-box">
                <h1>Cadastro</h1>
                <input type="text" placeholder="Seu nome"/>
                <input type="email" placeholder="Seu email"/>
                <input type="password" placeholder="Crie uma senha"/>
                <button>Cadastrar</button>
                <p onClick={() => mudarTela("login")}>Já tem conta? entrar</p>
            </form>
        </div>
    );
}

export default Register;