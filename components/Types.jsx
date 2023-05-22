import useQuiz from "@/app/store/store";
const types = ["Boolean", "Multiple"];
const Types = () => {
  const addType = useQuiz((state) => state.addType);
  const quizConfig = useQuiz((state) => state.config);

  return (
    <div className="dropdown col-span-4 sm:col-span-2 lg:col-span-1">
      <label tabIndex={0} className="btn btn-outline w-full sm:max-w-xs">
        Select Type
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
      <p className="text-sm mt-5">
        Level:{` ${quizConfig.type === "" ? "All Types" : quizConfig.type}`}
      </p>
    </div>
  );
};

export default Types;
