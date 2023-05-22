import useQuiz from "@/app/store/store";
const levels = ["Easy", "Medium", "Hard"];
const Levels = () => {
  const addLevel = useQuiz((state) => state.addLevel);
  const quizConfig = useQuiz((state) => state.config);

  return (
    <div className="dropdown col-span-4 sm:col-span-2 lg:col-span-1">
      <label tabIndex={0} className="btn btn-outline w-full sm:max-w-xs">
        Select Level
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full overflow-y-scroll"
      >
        {levels.map((level) => (
          <li key={level} onClick={() => addLevel(level)}>
            <button>{level}</button>
          </li>
        ))}
      </ul>
      <p className="text-sm mt-5">
        Level:{` ${quizConfig.level === "" ? "All Levels" : quizConfig.level}`}
      </p>
    </div>
  );
};

export default Levels;
