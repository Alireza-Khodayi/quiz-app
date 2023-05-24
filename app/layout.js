"use client";
import "./globals.css";
import useQuiz from "./store/store";
export default function RootLayout({ children, quiz }) {
  const quizConfig = useQuiz((state) => state.config);
  let render = quizConfig.status ? quiz : children;
  return (
    <html lang="en">
      <head>
        <title>Trivia Quiz App</title>
      </head>
      <body>{render}</body>
    </html>
  );
}
