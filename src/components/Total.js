const Total = ({ course }) => {
  return (
    <div>
      <strong>
        <span>total of </span>
        {course.parts.reduce((total, part) => {
          return total + part.exercises;
        }, 0)}
        <span> exercises</span>
      </strong>
    </div>
  );
};

export default Total;
