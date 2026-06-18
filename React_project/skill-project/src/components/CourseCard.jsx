import { useState } from "react";

function CourseCard({ title, students }) {
  const [favorite, setFavorite] = useState(false);
  const [enrolled, setEnrolled] = useState(false);

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "❤️" : "🤍"}
      </button>

      <p>Students : {students}</p>

      <p>Progress : 60%</p>
      <progress value="60" max="100"></progress>

      <br /><br />

      <button
        onClick={() => setEnrolled(true)}
        disabled={enrolled}
      >
        {enrolled ? "Enrolled ✅" : "Enroll Now"}
      </button>
    </div>
  );
}

export default CourseCard;