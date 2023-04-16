import { BsPencil } from "react-icons/bs";
import Funcionario from "../funcionario/funcionario";
import hexToRgba from 'hex-to-rgba';
import "./time.css";
import { useRef } from "react";

const Time = ({ time, funcionariosTimeAtual, alteraCor, aoDeletarFuncionario, aoFavoritarFuncionario }) => {
  
  const openInputColor = () => {
    const inputColor= inputRef.current
    inputColor.click();
  };
  const inputRef = useRef(null);

  return (
    //<section className={props.className}>
    funcionariosTimeAtual.length > 0 ? (
      <section className="time" style={{ backgroundColor: hexToRgba(time.corTopo, '0.15') }}>
        <input
          ref={inputRef}
          className="input-color"
          value={time.corTopo}
          onChange={(event) => alteraCor(event.target.value, time.id)}
          type="color"
        />
        <BsPencil className="input-pencil" onClick={openInputColor} />

        <h4 style={{ borderBottomColor: time.corTopo }}>{time.nome}</h4>
        <div className="funcionarios">
          <div className="inline">
            {funcionariosTimeAtual.map((funcionario, indice) => {
              return (
                <Funcionario
                  corTopo={time.corTopo}
                  funcionario={funcionario}
                  key={"func" + indice}
                  aoDeletar={aoDeletarFuncionario}
                  aoFavoritar={aoFavoritarFuncionario}
                />
              );
            })}
          </div>
        </div>
      </section>
    ) : (
      ""
    )
  );
};

export default Time;
