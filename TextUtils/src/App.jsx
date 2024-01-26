import React from "react";
import Header from "./components/Header";
import TextForm from "./components/TextForm";
import Footer from "./components/Footer";
import About from "./components/About";

export default function App() {
  // const [mode , setMode] = useState(false);
  return (
    <>
      <Header />;
      <TextForm />
      <Footer />
    </>
  )
}
