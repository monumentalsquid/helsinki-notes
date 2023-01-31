import Part from "./Part";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <div>
        {course.parts.map((part) => {
          return (
            <Part key={part.id} name={part.name} exercises={part.exercises} />
          );
        })}
      </div>
      <Total course={course} />
    </div>
  );
};

export default Course;
