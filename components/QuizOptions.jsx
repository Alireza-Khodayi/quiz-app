"use client";
import { useState } from "react";
import useQuiz from "@/app/store/store";
import Categories from "./Categories";
import Levels from "./Levels";
import Types from "./Types";

const QuizOptions = () => {
  const quizConfig = useQuiz((state) => state.config);
  console.log(quizConfig);
  return (
    <section className="p-10 my-10 shadow-xl container mx-auto bg-base-100 grid grid-cols-4 grid-rows-2 gap-3 items-center justify-center">
      <div className="form-control w-full sm:max-w-xs col-span-4 sm:col-span-2 lg:col-span-1 dark:text-black ">
        <label className="label">
          <span className="label-text">Number of Questions:</span>
        </label>
        <input
          type="number"
          defaultValue={10}
          min={0}
          max={50}
          placeholder="Number of Questions..."
          className="input input-bordered w-full sm:max-w-xs"
        />
      </div>
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
