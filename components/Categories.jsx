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
      <label
        tabIndex={0}
        className="btn btn-outline w-full text-sm lg:text-xs xl:text-sm sm:max-w-xs flex justify-between"
      >
        {` ${
          quizConfig.category.name === ""
            ? "Select Category"
            : quizConfig.category.name
        }`}
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
        {categories.map((category) => (
          <li
            key={category.id}
            onClick={() => addCategory(category.id, category.name)}
          >
            <button>{category.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
