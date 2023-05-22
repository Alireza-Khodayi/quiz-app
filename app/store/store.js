import { create } from "zustand";

const defaultConfig = {
  numberOfQuestions: 10,
  category: { id: 0, name: "" },
  type: "",
  status: "",
  level: "",
  score: 0,
};
const useQuiz = create((set) => ({
  config: { ...defaultConfig },

  addNumberOfQuestions: (count) =>
    set((state) => ({ config: { ...state.config, numberOfQuestions: count } })),

  addCategory: (id, name) =>
    set((state) => ({
      config: { ...state.config, category: { id: id, name: name } },
    })),

  addLevel: (level) =>
    set((state) => ({ config: { ...state.config, level: level } })),

  addStatus: (status) =>
    set((state) => ({ config: { ...state.config, status: status } })),

  addScore: (score) =>
    set((state) => ({ config: { ...state.config, score: score } })),

  addType: (type) =>
    set((state) => ({ config: { ...state.config, type: type } })),
}));

export default useQuiz;
