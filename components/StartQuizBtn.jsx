"use client";
import useQuiz from "@/app/store/store";

const StartQuizBtn = () => {
  const quizConfig = useQuiz((state) => state.config);
  const addStatus = useQuiz((state) => state.addStatus);
  return (
    <div className="form-control w-full col-span-4">
      <button
        onClick={() => {
          addStatus("start");
          console.log(quizConfig);
        }}
        className="btn btn-primary mt-2"
      >
        Start Quiz Now!
      </button>
    </div>
  );
};

export default StartQuizBtn;
