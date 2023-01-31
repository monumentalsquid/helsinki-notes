const Part = ({ name, exercises }) => {
  return (
    <p>
      <span>{name}</span>
      <span> {exercises}</span>
    </p>
  );
};

export default Part;
