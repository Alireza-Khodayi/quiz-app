import useQuiz from "@/app/store/store";
import { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const addCategory = useQuiz((state) => state.addCategory);

  const fetchCategories = async () => {
    const { trivia_categories } = await (
      await fetch("https://opentdb.com/api_category.php")
    ).json();
    setCategories([...trivia_categories]);
    console.log("Category Fetched");
  };
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    <div className="form-control w-full sm:max-w-xs col-span-4 sm:col-span-2 lg:col-span-1 dark:text-black">
      <label className="label">
        <span className="label-text">Select Category</span>
      </label>
      <select
        className="select select-bordered"
        defaultValue={"Select Category"}
      >
        <option disabled>Select Category</option>
        {categories.map((category) => (
          <option
            key={category.id}
            onClick={() => addCategory(category.id, category.name)}
          >
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Categories;
