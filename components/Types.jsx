import useQuiz from "@/app/store/store";
const types = ["Boolean", "Multiple"];
const Types = () => {
  const addType = useQuiz((state) => state.addType);
  const quizConfig = useQuiz((state) => state.config);

  return (
    <div className="dropdown col-span-4 sm:col-span-2 lg:col-span-1">
      <label
        tabIndex={0}
        className="btn btn-outline w-full sm:max-w-xs flex justify-between"
      >
        {` ${quizConfig.type === "" ? "Select Type" : quizConfig.type}`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full overflow-y-scroll"
      >
        {types.map((type) => (
          <li key={type} onClick={() => addType(type)}>
            <button>{type}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Types;
