import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learn3_backend } from "../../../../declarations/learn3_backend"; 

import Robot from "../../assets/robot.png";

import "./style.css";

const aula = {
  id: 1,
  content: [
    {
      tipo: "aula",
      texto: "A Internet Computer (ICP) é uma blockchain Layer 1 de propósito geral, projetada para o desenvolvimento de DAPPs (Aplicações Descentralizadas) escaláveis, com alto desempenho e diversos diferenciais inovadores. Entre eles, destaca-se pela sua arquitetura com a possibilidade de hospedar DApps 100% on-chain, sem necessidade de servidores tradicionais, permitindo a hospedagem de frontend, backend e armazenamento de dados. Além disso, a ICP permite a integração direta com APIs Web2 e outras blockchains, como o Bitcoin, por meio do projeto Chain Fusion. Com essa abordagem, a ICP pode ser vista como uma solução completa para a Web3, proporcionando maior descentralização, interoperabilidade e eficiência no desenvolvimento de aplicações blockchain."
    },
    {
      tipo: "video",
      texto: "Assista um vídeo explicando com mais detalhes sobre a ICP",
      url: 'https://www.youtube.com/watch?v=jG8ca9aV9qg&ab_channel=ICPHubBrasil'
    },
    {
      tipo: "pergunta",
      texto: "A ICP é utilizada para que?",
      alternativas: [
        'Desenvolver aplicativos descentralizados',
        'Realizar transações financeiras',
        'Criar tokens',
        'Criar NFTs'
      ],
      respostaCerta: 'Desenvolver aplicativos descentralizados',
    }
  ]
}

export default function ClasseDetail() {
  const { id } = useParams();
  const [isLogged, setIsLogged] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [aulas, setAula] = useState([]);
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
    async function fetchAula() {
      const response = await learn3_backend.acessarAulas(id);
      setAula(response);
    }
    fetchAula();
  }, [])

  const handleClickNext = () => {
    if (currentIndex < aula.content.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Aula concluida!\nVocê ganhou 0.02 ICP!");
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

