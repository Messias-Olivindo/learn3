import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learn3_backend } from "../../../../declarations/learn3_backend"; 

import Robot from "../../assets/robot.png";

import "./style.css";

// const aula = {
//   id: 1,
//   content: [
//     {
//       tipo: "aula",
//       texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est perferendis impedit voluptas ab quis? Dolorum, dolorem obcaecati rem doloribus error explicabo corporis cum sed alias, quas ullam voluptatem officiis?"
//     },
//     {
//       tipo: "video",
//       texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est perferendis impedit voluptas ab quis? Dolorum, dolorem obcaecati rem doloribus error explicabo corporis cum sed alias, quas ullam voluptatem officiis?",
//       url: 'https://www.youtube.com/watch?v=jG8ca9aV9qg&ab_channel=ICPHubBrasil'
//     },
//     {
//       tipo: "pergunta",
//       texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus est perferendis impedit voluptas ab quis? Dolorum, dolorem obcaecati rem doloribus error explicabo corporis cum sed alias, quas ullam voluptatem officiis?",
//       alternativas: [
//         'Alternativa 1',
//         'Alternativa 2',
//         'Alternativa 3',
//         'Alternativa 4'
//       ],
//       respostaCerta: 'Alternativa 2',
//     }
//   ]
// }

export default function ClasseDetail() {
  const { id } = useParams();
  const [isLogged, setIsLogged] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aula, setAula] = useState([]);
  const [selectedAlternative, setSelectedAlternative] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  })

  useEffect(() => {
    if (isFetching) return

    if (!isLogged) {
      navigate("/login");
    }
  }, [isLogged, navigate, isFetching]);

  useEffect(() => {
    const response = learn3_backend.acessarAulas(id)
    setAula(response)
  }, [])

  const handleClickNext = () => {
    if (currentIndex < aula.content.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate("/aulas");
    }
  }

  const handleClickPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <main className="courses-container">
      <header>
        <h1>Aula Id: {id}</h1>
      </header>
      <section className="page-container">
        <div className="page">
          {aula.content[currentIndex] && (
            <>
              <img src={Robot} alt="Robot" />

              <p>{aula.content[currentIndex].texto}</p>

              {aula.content[currentIndex].tipo === "video" && (
                <div className="video-container">
                  <button onClick={() => window.open(aula.content[currentIndex].url, '_blank')}>Assistir no YouTube</button>
                </div>
              )}

              {aula.content[currentIndex].alternativas && <div className="alternativas">
                {aula.content[currentIndex].alternativas?.map((alt, index) => (
                  <div
                    key={index}
                    className="alternativa"
                    onClick={() => setSelectedAlternative(index)}
                  >
                    <input
                      id={index}
                      type="radio"
                      name="alternativas"
                      checked={selectedAlternative === index}
                      onChange={() => setSelectedAlternative(index)}
                      style={{ backgroundColor: selectedAlternative === index || alt === aula.content[currentIndex].respostaCerta ? "green" : "red" }}
                    />
                    <label htmlFor={index}>{alt}</label>
                  </div>
                ))}
              </div>}
            </>
          )}
        </div>
        <div className="navigation-buttons-container">
          <button onClick={handleClickPrevious}>Anterior</button>
          <button onClick={handleClickNext}>{currentIndex < aula.content.length - 1 ? "Próxima" : "Finalizar"}</button>
        </div>
      </section>
    </main>
  )
}

