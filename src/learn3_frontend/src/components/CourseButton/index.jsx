import { Link } from "react-router-dom"
import "./style.css"

export function CourseButton({ extended = false, redirectTo, onClick, image, dontShowButton = false }) {
  return (
    redirectTo ? (
      <Link to={redirectTo} className="course-button-container">
        <div
          className="course-button"
          onClick={onClick}
          style={{
            width: extended ? 850 : 400,
            backgroundImage: `url(${image})`
          }}
        >
          {!dontShowButton && <button>Iniciar aula</button>}
        </div>
      </Link>
    ) : (
      <div
        className="course-button-container"
        onClick={onClick}
      >
        <div
          className="course-button"
          style={{
            width: extended ? 850 : 400,
            backgroundImage: `url(${image})`
          }}
        >
          {!dontShowButton && <button>Iniciar aula</button>}
        </div>
      </div>
    )
  )
}