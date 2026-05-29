import "../styles/history.css";

import fotodoGaroto from "../assets/garotoDaHistoria.png";

import habilidadesImagem from "../assets/habilidadesSaoOCaminho.jpg";

import logoEmakers from "../assets/logoEmakersParaSite.png";

import logoUfla from "../assets/logoUflaParaSite.png";

function History() {

    return (

        <div className="history-page">

            {/* HERO */}

            <section className="history-hero">

                <h1 className="history-title">
                    Sobre Nós
                </h1>

                {/* ESQUERDA */}

                <div className="history-left">

                    <h2>
                        O lugar onde tudo começa
                        e os sonhos ganham vida.
                    </h2>

                </div>

                {/* DIREITA */}

                <div className="history-right">

                    <div className="history-image-box">

                        <img
                            src={fotodoGaroto}
                            alt="Garoto"
                        />

                        <span>
                            Envie um comentário
                        </span>

                    </div>

                </div>

                {/* BANNER */}

                <div className="history-banner">

                    <p>
                        Descubra as novidades mais recentes da nossa empresa!
                    </p>

                </div>

            </section>

            {/* MISSÃO */}

            <section className="mission-section">

                {/* IMAGEM */}

                <div className="mission-image">

                    <img
                        src={habilidadesImagem}
                        alt="Habilidades"
                    />

                </div>

                {/* TEXTO */}

                <div className="mission-text">

                    <h2 className="mission-title">
                        Habilidades são o caminho para
                        transformar seu potencial em realidade.
                    </h2>

                    <p className="mission-subtext">
                        Aqui, você pode aprender algo novo,
                        capacitar sua equipe ou compartilhar
                        seu conhecimento com o mundo.

                        Como especialistas em aprendizado online,
                        estamos ao seu lado para ajudar a alcançar
                        suas ambições e dar o próximo passo na sua jornada.
                    </p>

                    <h3 className="force-title">
                        A força que existe em cada um de nós
                    </h3>

                    <p className="force-text">
                        Neste vídeo, você verá como a coragem
                        e a determinação podem transformar qualquer
                        desafio em uma conquista.

                        É um lembrete poderoso de que, mesmo diante
                        das dificuldades, somos capazes de superar
                        limites e encontrar força onde menos esperamos.

                        Assista e inspire-se a enfrentar seus próprios
                        obstáculos com resiliência!
                    </p>

                </div>

            </section>

            {/* CARDS */}

{/* DEPOIMENTOS */}

<section className="history-cards">

    <div className="history-card">

        <span className="quote">❝❞</span>

        <p>
            A Mindemy é ideal para nós. A equipe deles
            escolhe cursos novos e atualizados no marketplace
            para disponibilizar aos colaboradores, mantendo
            sempre o aprendizado alinhado com as necessidades
            do mercado.
        </p>

        <h3>André Ulhoa</h3>

        <span className="card-role">
            Gerente de Desenvolvimento de Talentos
        </span>

        <strong>
            Leia o estudo de caso da NovaTech
        </strong>

    </div>

    <div className="history-card">

        <span className="quote">❝❞</span>

        <p>
            Em geral, foi um grande sucesso. Eu costumava
            ouvir elogios sobre como a plataforma era eficaz
            e transformadora para os funcionários.
        </p>

        <h3>Lorenzo Ozório</h3>

        <span className="card-role">
            Gerente de Treinamento Corporativo
        </span>

        <strong>
            Leia o estudo de caso da Global Systems
        </strong>

    </div>

    <div className="history-card">

        <span className="quote">❝❞</span>

        <p>
            A Mindemy atende às necessidades da empresa
            de forma rápida e eficiente. Realmente a melhor
            solução para o desenvolvimento de nossos
            colaboradores e a evolução de suas carreiras.
        </p>

        <h3>Anderson Leris</h3>

        <span className="card-role">
            Gerente de Desenvolvimento de Talentos
        </span>

        <strong>
            Leia o estudo de caso da TecnoGlobal
        </strong>

    </div>

</section>

            {/* LOGOS */}

            <section className="partners-section">

                <img
                    src={logoEmakers}
                    alt="Logo Emakers"
                />

                <img
                    src={logoUfla}
                    alt="Logo UFLA"
                />

            </section>

            {/* NOSSA HISTÓRIA */}

            <section className="our-history">

                <h2>
                    Nossa História
                </h2>

                <p>
                    A Mindemy nasceu com o propósito de tornar o aprendizado acessível e prático para todos. 
                    
                    Criamos uma plataforma que oferece cursos nas áreas mais promissoras da tecnologia, com foco em qualidade e atualidade. 
                    
                    Hoje, ajudamos milhares de pessoas no Brasil a se capacitarem e conquistarem novas oportunidades no mercado. 
                    
                    A Mindemy é o lugar onde você investe no seu futuro, aprimora suas habilidades e alcança o sucesso. Venha para a Mindemy e comece a transformar sua vida profissional hoje mesmo!

                </p>

            </section>

            {/* FOOTER */}

            <footer className="history-footer">

                <div className="footer-left">

                    <p>Mindemy</p>
                    <p>Ensine na Mindemy</p>
                    <p>Baixe o aplicativo</p>
                    <p>Quem somos</p>
                    <p>Fale conosco</p>

                </div>

                <div className="footer-right">

                    <h2>MINDEMY</h2>

                    <span>
                        Invista no seu sucesso
                    </span>

                </div>

            </footer>

        </div>

    );
}

export default History;