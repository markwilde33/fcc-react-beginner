import React from "react";
// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import TodoItem from "./components/TodoItem";
// import ContactCard from "./components/ContactCard";
import Jokes from "./components/Jokes";
import jokesData from "./components/jokesData";
import SchoolProducts from "./components/SchoolProducts";
import schoolProductsData from "./components/schoolProductsData";

function App() {
  const jokeComponents = jokesData.map((joke) => (
    <Jokes key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ));
  const productComponents = schoolProductsData.map((product) => (
    <SchoolProducts
      key={product.id}
      name={product.name}
      price={product.price}
      description={product.description}
    />
  ));
  return (
    <div>
      <section>
        <h1 style={{ textAlign: "center", paddingTop: 33 }}>Jokes</h1>
        <div className="jokes">{jokeComponents}</div>
      </section>
      <section>
        <h1 style={{ textAlign: "center" }}>Products</h1>
        <div className="jokes">{productComponents}</div>
      </section>
    </div>
  );
}

export default App;
