import s from "./Options.module.css";

const Options = ({ updateFeedback, feedback, onReset, totalFeedback }) => {
  return (
    <ul className={s.list}>
      {feedback.map((key) => (
        <li className={s.item} key={key}>
          <button className={s.button} onClick={() => updateFeedback(key)}>
            {key}
          </button>
        </li>
      ))}
      {totalFeedback > 0 && (
        <li className={s.item}>
          <button className={s.resetButton} onClick={onReset}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
