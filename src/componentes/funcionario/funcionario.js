import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "./funcionario.css";

const Funcionario = ({ corTopo, funcionario, aoDeletar, aoFavoritar }) => {
  const genderClass = ["Masculino", "Feminino"].includes(funcionario.gender)
    ? funcionario.gender === "Masculino"
      ? "male"
      : "female"
    : "undefined";

  const favoritar = () => {
    aoFavoritar(funcionario.id);
  };
  const propsFavoritar = {
    size: 25,
    onClick: favoritar,
  };

  return (
    <div className="funcionario" style={{ borderTopColor: corTopo }}>
      <AiFillCloseCircle
        className="deletar"
        onClick={() => aoDeletar(funcionario.id)}
      />
      <div className={"avatar " + genderClass} alt="avatar">
        {funcionario.imagem.trim() !== "" ? (
          <img alt="avatar" src={funcionario.imagem} className="avatar" />
        ) : null}
      </div>
      <div className="nome" style={{ color: corTopo }}>
        {funcionario.nome}
      </div>
      <div className="cargo">{funcionario.cargo}</div>
      <div className="star">
        {funcionario.favorito ? (
          <AiFillHeart {...propsFavoritar} color='#dd0011' />
        ) : (
          <AiOutlineHeart {...propsFavoritar} />
        )}
      </div>
    </div>
  );
};

export default Funcionario;
