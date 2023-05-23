"use client";
import useQuiz from "@/app/store/store";
import NumberOfQuestions from "./NumberOfQuestions";
import Categories from "./Categories";
import Levels from "./Levels";
import Types from "./Types";
import StartQuizBtn from "./StartQuizBtn";

const QuizOptions = () => {
  const quizConfig = useQuiz((state) => state.config);
  console.log(quizConfig);
  
  return (
    <section className="p-10 my-10 shadow-xl container mx-auto bg-base-100 grid grid-cols-4 grid-rows-2 gap-3 items-center justify-center">
      <NumberOfQuestions />
      <Categories />
      <Levels />
      <Types />
      <StartQuizBtn />
    </section>
  );
};

export default QuizOptions;
