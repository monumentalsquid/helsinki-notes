const Note = ({ note, toggleImportance }) => {
  const label = note.important ? "Decrease" : "Increase";

  return (
    <li className="note">
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

export default Note;
