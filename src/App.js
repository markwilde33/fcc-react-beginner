import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <TodoItem />
      <Footer />
    </div>
  );
}

export default App;
