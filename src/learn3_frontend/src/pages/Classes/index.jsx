import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CourseButton } from "../../components/CourseButton";

import ExtAulaImg01 from "../../assets/aulaTemplateExt01.png";
import AulaImg01 from "../../assets/aulaTemplate01.png";
import AulaImg02 from "../../assets/aulaTemplate02.png";
import AulaImg03 from "../../assets/aulaTemplate03.png";
import AulaImg04 from "../../assets/aulaTemplate04.png";
import ExtAulaImg02 from "../../assets/aulaTemplateExt02.png";

import "./style.css";

const buttons = [
  {
    image: ExtAulaImg01,
    type: 'banner'
  },
  {
    image: AulaImg01,
    redirectTo: '/aula/1'
  },
  {
    image: AulaImg02,
    redirectTo: '/aula/2'
  },
  {
    image: AulaImg03,
    redirectTo: '/aula/3'
  },
  {
    image: AulaImg04,
    redirectTo: '/aula/4'
  },
  {
    image: ExtAulaImg02,
    type: 'banner'
  }
]

export default function Classes() {
  const [isLogged, setIsLogged] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
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

  return (
    <main className="courses-container">
      <header>
        <h1>Suas aulas</h1>
      </header>
      <section>
        {buttons.map((btn, index) => (
          <CourseButton
            key={index}
            image={btn.image}
            onClick={btn.onClick}
            redirectTo={btn.redirectTo}
            extended={btn.type === 'banner'}
            dontShowButton={btn.type === 'banner'}
          />
        ))}
      </section>
    </main>
  )
}
