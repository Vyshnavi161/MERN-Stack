import { useState } from "react";

function CourseCard({ title, students }) {
  const [favorite, setFavorite] = useState(false);
  const currentUser = JSON.parse(
  localStorage.getItem("currentUser")
);

const enrolledCourses = JSON.parse(
  localStorage.getItem("enrolledCourses")
) || [];

const isEnrolled = enrolledCourses.some(
  (course) =>
    course.title === title &&
    course.user === currentUser?.email
);
const handleEnroll = () => {
  if (!currentUser) {
    alert("Please login first");
    return;
  }

  const updatedCourses = [
    ...enrolledCourses,
    {
      title,
      students,
      user: currentUser.email,
      progress: 0,
    },
  ];

  localStorage.setItem(
    "enrolledCourses",
    JSON.stringify(updatedCourses)
  );

  window.location.reload();
};
  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => setFavorite(!favorite)}>
        {favorite ? "❤️" : "🤍"}
      </button>

      <p>Students : {students}</p>

      <button
  onClick={handleEnroll}
  disabled={isEnrolled}
>
  {isEnrolled ? "Enrolled ✅" : "Enroll Now"}
</button>
    </div>
  );
}

export default CourseCard;