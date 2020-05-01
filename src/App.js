import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import TodoItem from "./components/TodoItem";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="contacts">
      <ContactCard
        name="Bill"
        imgUrl="http://placekitten.com/400/298"
        phone="018490456"
        email="bill@gmail.com"
      />
      <ContactCard
        name="Bob"
        imgUrl="http://placekitten.com/400/300"
        phone="018490455"
        email="bob@gmail.com"
      />
      <ContactCard
        name="Berry"
        imgUrl="http://placekitten.com/400/301"
        phone="018490450"
        email="berry@gmail.com"
      />
      <ContactCard
        name="Baba"
        imgUrl="http://placekitten.com/400/297"
        phone="018490451"
        email="baba@gmail.com"
      />
    </div>
  );
}

export default App;
