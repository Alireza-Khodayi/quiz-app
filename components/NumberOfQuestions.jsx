import useQuiz from "@/app/store/store";
const numbers = [10, 15, 20, 30, 50];

const NumberOfQuestions = () => {
  const addNumberOfQuestions = useQuiz((state) => state.addNumberOfQuestions);
  const quizConfig = useQuiz((state) => state.config);

  return (
    <div className="dropdown col-span-4 sm:col-span-2 lg:col-span-1">
      <label tabIndex={0} className="btn btn-outline w-full sm:max-w-xs">
        Number of Questions
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full overflow-y-scroll"
      >
        {numbers.map((number) => (
          <li key={number} onClick={() => addNumberOfQuestions(number)}>
            <button>{number}</button>
          </li>
        ))}
      </ul>
      <p className="text-sm mt-5">
        Number of Questions:{` ${quizConfig.numberOfQuestions}`}
      </p>
    </div>
  );
};

export default NumberOfQuestions;
