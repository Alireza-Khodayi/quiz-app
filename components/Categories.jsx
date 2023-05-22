import useQuiz from "@/app/store/store";
import { useState, useEffect } from "react";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const addCategory = useQuiz((state) => state.addCategory);
  const quizConfig = useQuiz((state) => state.config);

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
    <div className="dropdown col-span-4 sm:col-span-2 lg:col-span-1">
      <label tabIndex={0} className="btn btn-outline w-full sm:max-w-xs">
        Select Category
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-full overflow-y-scroll"
      >
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => addCategory(category.id, category.name)}
          >
            <button>{category.name}</button>
          </li>
        ))}
      </ul>
      <p className="text-sm mt-5">
        Category:
        {` ${
          quizConfig.category.name === ""
            ? "All Categories"
            : quizConfig.category.name
        }`}
      </p>
    </div>
  );
};

export default Categories;
