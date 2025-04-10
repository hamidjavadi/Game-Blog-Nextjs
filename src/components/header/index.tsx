import { PropsWithChildren } from "react";
import Navbar from "../navbar";
import styles from "./header.module.css";

const Header = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={`text-center flex justify-center ${styles.background} ${styles.rounded}`}
    >
      <div className="pt-10 pb-10 md:w-8/12 container">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Header;
