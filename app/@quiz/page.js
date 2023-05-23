"use client";
import Container from "@/components/UI/Container";
import useQuiz from "@app/store/store";
import Loading from "@components/UI/Loading";
import { useEffect, useState } from "react";
const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const quizConfig = useQuiz((state) => state.config);
  const setScore = useQuiz((state) => state.setScore);

  useEffect(() => {
    const getQuestions = async () => {
      setLoading(true);
      const quizUrl = `https://opentdb.com/api.php?amount=${
        quizConfig.numberOfQuestions
      }${quizConfig.category.id ? `&category=${quizConfig.category.id}` : ""}${
        quizConfig.level ? `&difficulty=${quizConfig.level.toLowerCase()}` : ""
      }${quizConfig.type ? `&type=${quizConfig.type.toLowerCase()}` : ""}`;

      const { results } = await (await fetch(quizUrl)).json();
      let shuffledResults = results.map((result) => {
        let value = [...result.incorrect_answers, result.correct_answer]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value);
        result.answer = [...value];
        return result;
      });
      setQuestions(shuffledResults);
      setLoading(false);
      console.log(questions);
    };
    getQuestions();
  }, []);
  console.log(quizConfig);
  return (
    <Container>
      {loading ? (
        <section className="p-10 shadow-xl container mx-auto bg-base-100 dark:bg-gray-800 flex items-center justify-center h-[50vh]">
          <Loading />
        </section>
      ) : (
        <section className="p-10 shadow-xl container mx-auto bg-base-100 dark:bg-gray-800">
          <h1 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
            Question Number :
            <span className="text-yellow-400 dark:text-yellow-400"> #1 </span>
          </h1>
          <p>Your Score : 0</p>
          <div>
            <h4 className="my-10 text-2xl font-bold text-center leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
              {questions.length ? questions[0].question : null}
            </h4>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {questions.length
              ? questions[0].answer.map((answer) => (
                  <button key={answer} className="btn btn-outline col-span-1">
                    {answer}
                  </button>
                ))
              : null}
          </div>
          <div className="flex justify-end">
            <button className="btn mt-10">Next</button>
          </div>
        </section>
      )}
    </Container>
  );
};

export default Quiz;
