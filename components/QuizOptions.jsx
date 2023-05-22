"use client";
import useQuiz from "@/app/store/store";
import NumberOfQuestions from "./NumberOfQuestions";
import Categories from "./Categories";
import Levels from "./Levels";
import Types from "./Types";

const QuizOptions = () => {
  const quizConfig = useQuiz((state) => state.config);
  console.log(quizConfig, "here");
  return (
    <section className="p-10 my-10 shadow-xl container mx-auto bg-base-100 grid grid-cols-4 grid-rows-2 gap-3 items-center justify-center">
      <NumberOfQuestions />
      <Categories />
      <Levels />
      <Types />
      <div className="form-control w-full col-span-4">
        <button className="btn btn-primary mt-2">Start Quiz Now!</button>
      </div>
    </section>
  );
};

export default QuizOptions;
