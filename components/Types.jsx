import useQuiz from "@/app/store/store";
const types = ["Boolean", "Multiple"];
const Types = () => {
  const addType = useQuiz((state) => state.addType);

  return (
    <div className="form-control w-full sm:max-w-xs col-span-4 sm:col-span-2 lg:col-span-1 dark:text-black">
      <label className="label">
        <span className="label-text">Select Type</span>
      </label>
      <select className="select select-bordered" defaultValue={"Select Type"}>
        <option disabled>Select Type</option>
        {types.map((type) => (
          <option key={type} onClick={()=> addType(type)}>{type}</option>
        ))}
      </select>
    </div>
  );
};

export default Types;
