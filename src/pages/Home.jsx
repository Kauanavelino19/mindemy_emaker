import "../styles/home.css";
import banner from "../assets/331f54544f779e2b2bc79312ad141fb4de31c2a7.gif";

function Home(){
    
    return(
        <div className="home">
            <div className="hero">
                <div className="hero-text" >
                    <h1><span>&gt;&gt;</span>Adquira <br /> 
                    <strong>habilidades práticas</strong> e transforme sua carreira com cursos que preparam você para o mercado de trabalho
                    </h1>

                    <p>
                         Aprenda hoje, conquiste o amanhã! <br />
                        Invista no seu Sucesso!
                    </p>
                    <input type="text" placeholder="Pesquisar por algum curso" className="search"/>
                </div>
                <div className="hero-image">
                    <img src={banner} alt="Estudando" />
                </div>
            </div>
        </div>
    
        
    );
}

export default Home;