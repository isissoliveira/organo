import { useState } from "react";
import Botao from "../botao/botao";
import Campo from "../campo/campo";
import ListaSuspensa from "../listaSuspensa/listaSuspensa";
import "./formulario.css";

const Formulario = (props) => {
  const times = props.times;

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.addFuncionarioSalvo({
      nome,
      cargo,
      imagem,
      gender,
      time,
    });
  };
  const aoSalvarTime = (evento) => {
    evento.preventDefault();
    props.addTimeSalvo({
      nome:nomeTime,
      corTopo:corTime
    });
  };

  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("");

  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("");

  const genders = ["","Masculino", "Feminino", "Prefiro não informar"]

  return (
    
    <section className="formulario-container">
      <form className="formulario" onSubmit={aoSalvar}>
        <h3>Preencha os dados para criar o card do colaborador</h3>
        <Campo
          obrigatorio={true}
          label="Nome"
          trataCampoAlterado={setNome}
          valor={nome}
          placeholder="Digite seu Nome"
        />
        <Campo
          label="Cargo"
          trataCampoAlterado={setCargo}
          valor={cargo}
          placeholder="Digite seu Cargo"
        />
        <Campo
          label="Imagem"
          trataCampoAlterado={setImagem}
          valor={imagem}
          placeholder="Digite o endereço da Imagem"
        />
        <ListaSuspensa
          label="Gênero"
          trataCampoAlterado={setGender}
          itens={genders}
          obrigatorio={true}
        />
        <ListaSuspensa
          label="Times"
          trataCampoAlterado={setTime}
          itens={times}
          obrigatorio={true}
        />
        <Botao> Criar card</Botao>
      </form>
      <form className="formulario" onSubmit={aoSalvarTime}>
      <h3>Preencha os dados para criar o time</h3>
      <Campo
        obrigatorio
        label="Nome"
        trataCampoAlterado={setNomeTime}
        valor={nomeTime}
        placeholder="Digite o Time"
      />
      <Campo
        label="Cor"
        type="color"
        trataCampoAlterado={setCorTime}
        valor={corTime}
        placeholder="Digite a cor primária do Time"
      />
      <Botao> Criar card</Botao>
    </form>
    </section>
  );
};

export default Formulario;
