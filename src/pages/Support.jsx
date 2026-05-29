import "../styles/support.css";
function UserIcon() {
  return <div style={{ fontSize: "55px" }}>👤</div>;
}

function CartIcon() {
  return <div style={{ fontSize: "55px" }}>🛒</div>;
}

function BookIcon() {
  return <div style={{ fontSize: "55px" }}>📚</div>;
}

function StarIcon() {
  return <div style={{ fontSize: "55px" }}>⭐</div>;
}

function Support({ mudarTela }) {
  return (
    <>
     
      <div className="support-page">

        <h1 className="support-title">
          Como podemos ajudar?
        </h1>

        <input
          type="text"
          placeholder="Exemplo: Como saber o curso ideal para mim?"
          className="support-search"
        />

        <p className="support-popular">
          <strong>Popular:</strong> Como ver os meus cursos,
          Como acessar meus certificados,
          Sistema de reembolso
        </p>

        <h2 className="support-subtitle">
          Assuntos
        </h2>

        <div className="support-cards">

          <div className="support-card">
            <UserIcon />

            <ul>
              <li>Fale com nosso suporte</li>
              <li>Fale com nossos professores</li>
              <li>Dúvidas frequentes</li>
              <li>SAC</li>
            </ul>
          </div>

          <div className="support-card">
            <CartIcon />

            <ul>
              <li>Adquirir novos cursos</li>
              <li>Meus cursos</li>
              <li>Ver meus cursos</li>
              <li>Meus certificados</li>
            </ul>
          </div>

          <div className="support-card">
            <BookIcon />

            <ul>
              <li>Falar com professores</li>
              <li>Material de apoio</li>
              <li>Biblioteca Mindemy</li>
              <li>Quero ser professor</li>
            </ul>
          </div>

          <div className="support-card">
            <StarIcon />

            <ul>
              <li>Avaliar um curso</li>
              <li>Minhas avaliações</li>
              <li>Avaliações da comunidade</li>
              <li>Cursos mais avaliados</li>
            </ul>
          </div>

        </div>

        <footer className="support-footer">

          <div className="footer-left">
            <p>Mindemy</p>
            <p>Ensine na Mindemy</p>
            <p>Baixe o aplicativo</p>
            <p>Quem somos</p>
            <p>Fale conosco</p>
          </div>

          <div className="footer-right">
            <h2>MINDEMY</h2>
            <p>Invista no seu sucesso</p>
          </div>

        </footer>

        <div className="chatbot-button">
          💬
        </div>

      </div>
    </>
  );
}

export default Support;