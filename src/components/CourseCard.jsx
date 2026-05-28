function CourseCard({ titulo, descricao, imagem }) {

  return (
    <div className="card">

      <img src={imagem} alt={titulo} className="card-image" />

      <h3>{titulo}</h3>

      <p>{descricao}</p>

      <button>Ver curso</button>

    </div>
  );
}

export default CourseCard;