import useQuiz from "@/app/store/store";
const levels = ["Easy", "Medium", "Hard"];
const Levels = () => {
  const addLevel = useQuiz((state) => state.addLevel);

  return (
    <div className="form-control w-full sm:max-w-xs col-span-4 sm:col-span-2 lg:col-span-1 dark:text-black">
      <label className="label">
        <span className="label-text">Select Level</span>
      </label>
      <select className="select select-bordered" defaultValue={"Select Level"}>
        <option disabled>Select Level</option>
        {levels.map((level) => (
          <option key={level} onClick={() => addLevel(level)}>
            {level}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Levels;
