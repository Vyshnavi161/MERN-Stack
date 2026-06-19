function MyLearning() {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  const enrolledCourses = JSON.parse(
    localStorage.getItem("enrolledCourses")
  ) || [];

  const myCourses = enrolledCourses.filter(
    (course) => course.user === currentUser?.email
  );

  return (
    <div style={{ padding: "30px" }}>
      <h1>My Learning</h1>

      {myCourses.length === 0 ? (
        <p>No courses enrolled yet.</p>
      ) : (
        myCourses.map((course, index) => (
          <div
            key={index}
            style={{
              border: "1px solid gray",
              padding: "15px",
              marginBottom: "15px",
              borderRadius: "10px",
            }}
          >
            <h3>{course.title}</h3>

            <p>Progress: {course.progress}%</p>

            <progress
              value={course.progress}
              max="100"
            ></progress>
          </div>
        ))
      )}
    </div>
  );
}

export default MyLearning;