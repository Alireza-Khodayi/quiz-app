import QuizOptions from "@/components/QuizOptions";
import Container from "@/components/UI/Container";

export default function Home() {
  return (
    <Container>
      <section className="flex flex-col justify-center items-center pt-10">
        <h1 className="my-4 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Wellcome to Trivia Quiz App
        </h1>
        <QuizOptions />
      </section>
    </Container>
  );
}
