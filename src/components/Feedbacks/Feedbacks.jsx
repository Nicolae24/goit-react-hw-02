import s from "./Feedbacks.module.css";

const Feedback = ({ feedback }) => {
  return (
    <ul className={s.list}>
      {feedback.map(([key, value]) => (
        <li
          className={`${s.item} ${
            key === "Total points" || key === "Positive feedback"
              ? s.highlight
              : ""
          }`}
          key={key}
        >
          {key}: {value}
        </li>
      ))}
    </ul>
  );
};

export default Feedback;
