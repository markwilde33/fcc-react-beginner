import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import TodoItem from "./components/TodoItem";
// import ContactCard from "./components/ContactCard";
import Jokes from "./components/Jokes";
import JokesData from "./components/JokesData";

function App() {
  const jokeComponents = JokesData.map((joke) => (
    <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));
  return <div className="jokes">{jokeComponents}</div>;
}

export default App;
