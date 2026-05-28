import "../styles/home.css";

import banner from "../assets/331f54544f779e2b2bc79312ad141fb4de31c2a7.gif";

import CourseCard from "../components/CourseCard";
import ScrollDown from "../components/ScrollDown";

import curso1 from "../assets/5ca3040eb7bba42e42d685c34374379449b16ba7.jpg";
import curso2 from "../assets/92053f730b6beef578246b0ee217dd8dcbcdd0ee.jpg";
import curso3 from "../assets/c22f154821a8cbf75552700e0b2344e1d80336b8.jpg";

import codeImage from "../assets/fd3d5837d8c6923d8f772190591317bfc1525cf7 (3).png";

function Home(){

    return(
        <div className="home">

            <div className="hero">

                <div className="hero-text">

                    <h1>
                        <span>&gt;&gt;</span>
                        Adquira <br />

                        <strong>
                            habilidades práticas
                        </strong>

                        e transforme sua carreira com cursos que preparam você para o mercado de trabalho
                    </h1>

                    <p>
                        Aprenda hoje, conquiste o amanhã! <br />
                        Invista no seu Sucesso!
                    </p>

                    <input
                        type="text"
                        placeholder="Pesquisar por algum curso"
                        className="search"
                    />

                </div>

                <div className="hero-image">
                    <img src={banner} alt="Estudando" />
                </div>

            </div>

            <div className="top-bar"></div>

            <div className="cookie-box">

                <div className="cookie-text">

                    <h4>
                        🍪 Usamos cookies na entrega dos nossos serviços
                    </h4>

                    <p>Saber mais</p>

                </div>

                <div className="cookie-buttons">

                    <button className="reject">
                        Reject
                    </button>

                    <button className="ok">
                        Ok
                    </button>

                </div>

            </div>

            <ScrollDown />

            <section className="courses-section">

                <p className="courses-mini-title">
                    Tudo o que você precisa, exatamente onde você precisa.
                </p>

                <h2>
                    Conheça nossos cursos
                </h2>

                

                <div className="courses-container">

                    <CourseCard
                        titulo="Desenvolvimento Web"
                        descricao="Aprenda HTML, CSS, Javascript e React."
                        imagem={curso1}
                    />

                    <CourseCard
                        titulo="Ciência de Dados"
                        descricao="Python, SQL e análise de dados."
                        imagem={curso2}
                    />

                    <CourseCard
                        titulo="Design Gráfico"
                        descricao="Photoshop, Canva e Illustrator."
                        imagem={curso3}
                    />

                </div>

            </section>

            {/* NOVA SECTION */}

            <section className="focus-section">

                <h2>Foque no que realmente importa</h2>

                <div className="focus-container">

                    <div className="focus-cards">

                        <div className="focus-card">

                            <h3>Treinamento prático</h3>

                            <p>
                                Pratique o que você aprendeu
                                com exercícios e testes.
                            </p>

                        </div>

                        <div className="focus-card">

                            <h3>Certificações Qualificadas</h3>

                            <p>
                                Receba certificados reconhecidos
                                pelo mercado.
                            </p>

                        </div>

                        <div className="focus-card">

                            <h3>Análises e feedbacks</h3>

                            <p>
                                Receba insights personalizados
                                sobre seu aprendizado.
                            </p>

                        </div>

                        <div className="focus-card">

                            <h3>Conteúdo personalizável</h3>

                            <p>
                                Trilhas personalizadas
                                para seus objetivos.
                            </p>

                        </div>

                    </div>
                    <div className="challenge-box">

                        <div className="challenge-left">

                            <h3>Instruções</h3>

                            <p className="challenge-mini">
                            Teste seu conhecimento em Front-End.
                            </p>

                            <p className="challenge-description">
                            Coloque suas habilidades de Front-End à prova!
                            Crie uma página responsiva e interativa usando
                            HTML, CSS e JavaScript.

                            Teste sua criatividade e domínio das tecnologias
                            criando um layout funcional, moderno e compatível
                            com diferentes dispositivos.
                            </p>

                            <button>
                            INICIAR DESAFIO
                            </button>

                        </div>

                        <div className="challenge-right">

                            <img
                            src={codeImage}
                            alt="Código"
                            className="challenge-image"
                            />

                        </div>

                        </div>


                </div>

            </section>

        </div>
    );
}

export default Home;