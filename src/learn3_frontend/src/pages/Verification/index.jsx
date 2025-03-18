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
import { User } from "../../App";

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

export default function Verification() {
  const [isFetching, setIsFetching] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsFetching(false);
    }, 2000);
  })

  useEffect(() => {
    if (isFetching) return

    if (isLogged) {
      navigate("/aulas");
    }
    else {
      navigate("/login");
    }
  }, [isLogged, navigate, isFetching]);

  useEffect(() => {
    setIsLogged(User !== null);
    setIsFetching(false);
  }, [])

  return (
    <main className="verification-container">
      <div className="loading-indicator">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </main>
  )
}
