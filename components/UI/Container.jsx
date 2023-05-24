import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Container = ({ children }) => {
  return (
    <div
      className={`${inter.className} min-h-[95vh] py-10 flex flex-col items-center justify-center`}
    >
      {children}
    </div>
  );
};

export default Container;
