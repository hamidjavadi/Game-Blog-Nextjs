import Footer from "@/components/footer";
import Header from "@/components/header";
import { PropsWithChildren } from "react";
import "@/styles/globals.css";

const HomePageLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <h1>Home Layout</h1>
        {children}
        <Footer>Footer Children</Footer>
      </body>
    </html>
  );
};

export default HomePageLayout;
