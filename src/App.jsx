import { useState } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedbacks from "./components/Feedbacks/Feedbacks";
import { useLocalStorage } from "./hook/useLocalStorage";
const App = () => {
  const [feedback, setFeedbacks] = useLocalStorage("feedback", {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setFeedbacks({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = Object.values(feedback).reduce(
    (acc, value) => acc + value,
    0
  );
  const positiveFeedback = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const handleReset = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={updateFeedback}
        feedback={Object.keys(feedback)}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedbacks
          feedback={[
            ...Object.entries(feedback),
            ["Total points", totalFeedback],
            ["Positive feedback", `${positiveFeedback}%`],
          ]}
        />
      ) : (
        <p className="noFeedback">No feedback given</p>
      )}
    </>
  );
};

export default App;
