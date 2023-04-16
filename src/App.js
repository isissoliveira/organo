import { useEffect, useState } from "react";
import Banner from "./componentes/banner/banner";
import Formulario from "./componentes/formulario";
import Time from "./componentes/time/time";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [funcionarios, setFuncionarios] = useState([]);
  useEffect(() => {
    console.log(funcionarios);
  }, [funcionarios]);
  //const [funcionariosTime, setFuncionariosTime] = useState([]);

  // const times = [
  //   ["", ""],
  //   ["Programação", "blue"],
  //   ["Front-End", "green"],
  //   ["Design", "purple"],
  //   ["UX e Design", "orange"],
  //   ["Mobile", "pink"],
  //   ["Inovação e Gestão", "yellow"],
  // ];

  const [objTimes, setTimes] = useState([
    { id: uuidv4(), nome: "", corTopo: "", corBg: "" },
    { id: uuidv4(), nome: "Programação", corTopo: "#6395ec", corBg: "#f0f8fe" },
    { id: uuidv4(), nome: "Front-End", corTopo: "#7ad587", corBg: "#e3faef" },
    { id: uuidv4(), nome: "Design", corTopo: "#6a5bcd", corBg: "#e6e6fb" },
    { id: uuidv4(), nome: "UX e Design", corTopo: "#f97f50", corBg: "#fdefd5" },
    { id: uuidv4(), nome: "Mobile", corTopo: "#c71685", corBg: "#feeff5" },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      corTopo: "#deb886",
      corBg: "#fefff0",
    },
  ]);
  const addFuncionario = (funcionario) => {
    //debugger
    setFuncionarios([...funcionarios, { ...funcionario, id: uuidv4() }]);

    // let funcionariosPorTime = funcionariosTime.slice();

    // const posicaoTimeAtual = objTimes.findIndex(
    //   (time) => time.nome === funcionario.time
    // );
    // const nomeTimeAtual = objTimes[posicaoTimeAtual];

    // const indiceFunc = funcionariosPorTime.findIndex(
    //   (time) => time[0].nome === funcionario.time
    // );

    // if (indiceFunc >= 0) {
    //   funcionariosPorTime[indiceFunc][1].push(funcionario);
    // } else {
    //   funcionariosPorTime.push([nomeTimeAtual, [funcionario]]);
    // }
    // setFuncionariosTime(funcionariosPorTime.sort());
  };
  // const addFuncionario = (funcionario) => {
  //   console.log(funcionario)
  //   setFuncionarios([...funcionarios, funcionario]);

  //   let auxTimes = funcionariosTime.slice();
  //   const indiceTimes = times.findIndex((time) => time[0] === funcionario.time);
  //   const indice = auxTimes.findIndex((time) => time[0] === funcionario.time);

  //   if (indice >= 0) {
  //     auxTimes[indice][1].push(funcionario);
  //   } else {
  //     auxTimes.push([funcionario.time, [funcionario], times[indiceTimes][1]]);
  //   }
  //   setFuncionariosTime(auxTimes.sort());

  //   console.log(funcionarios);
  // };

  const aoDeletarFuncionario = (funcionarioId) => {
    console.log("deletando funcionario");
    //const indiceFunc = funcionarios.indexOf(funcionario);
    setFuncionarios(funcionarios.filter((func) => func.id !== funcionarioId));
  };

  const aoFavoritarFuncionario = (funcionarioId) => {
    setFuncionarios(
      funcionarios.map((func) => {
        if (func.id === funcionarioId) {
          func.favorito = !func.favorito
        }
        return func;
      })
    );
  };

  const addTime = (time) => {
    setTimes([...objTimes, { ...time, id: uuidv4() }]);
  };

  const alteraCorTime = (cor, idTime) => {
    setTimes(
      objTimes.map((time) => {
        if (time.id === idTime) {
          time.corTopo = cor;
        }
        return time;
      })
    );
  };

  return (
    <div className="App">
      <Banner />
      <Formulario
        addFuncionarioSalvo={addFuncionario}
        addTimeSalvo={addTime}
        times={objTimes.map((time) => time.nome)}
      />
      {/* {funcionariosTime.map((time, indice) => {
        return (
          <Time
            nome={time[0].nome}
            funcionariosTimeAtual={time[1]}
            key={"time" + indice}
            corTop={time[0].corTopo}
            corBg={time[0].corBg}
            // className={"time " + time[2]}
          />
        );
      })} */}

      {objTimes
        //.filter((time) => funcionarios.map((func) => func.time).includes(time.nome))
        .map((time, indice) => {
          return (
            <Time
              time={time}
              alteraCor={alteraCorTime}
              funcionariosTimeAtual={funcionarios.filter(
                (func) => func.time === time.nome
              )}
              aoDeletarFuncionario={aoDeletarFuncionario}
              aoFavoritarFuncionario={aoFavoritarFuncionario}
              key={"time" + indice}
              //nome={time.nome}
              //corTop={time.corTopo}
              //corBg={time.corBg}
              // className={"time " + time[2]}
            />
          );
        })}
    </div>
  );
}

export default App;
