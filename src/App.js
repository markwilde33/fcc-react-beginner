import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="jokes">
      <Jokes
        joke={{
          question: "What's the best thing about Switzerland?",
          punchline: "I don't know, but the flag is a big plus.",
        }}
      />
      <Jokes
        joke={{
          question: "Helvetica and Times New Roman walk into a bar.",
          punchline:
            "Get out of here!\" shouts the bartender. We don't serve your type.",
        }}
      />
      <Jokes
        joke={{
          question: "Hear about the new restaurant called Karma?",
          punchline: "There’s no menu: You get what you deserve.",
        }}
      />
      <Jokes
        joke={{
          question: "Did you hear about the claustrophobic astronaut?",
          punchline: "He just needed a little space.",
        }}
      />
      <Jokes
        joke={{
          punchline: "I ate a clock yesterday, it was very time-consuming.",
        }}
      />
    </div>
  );
}

export default App;
