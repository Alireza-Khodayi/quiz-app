import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Container = ({ children }) => {
  return (
    <div className={`${inter.className} min-h-screen py-10`}>{children}</div>
  );
};

export default Container;
