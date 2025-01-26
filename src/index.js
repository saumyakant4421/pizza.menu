import React from "react";
import ReactDOM from "react-dom/client"
import "./index.css";

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App(){
    return(
    <div className="container">
        <Header />
        <Menu/>
        <Footer />
    </div>
    );
}

function Header(){
    return(
      <header className="header">
            <h1>My Pizzeria</h1>
      </header>
    );
}

function Menu(){
  return(
    <div className = "menu">
    <h2>Our Menu</h2>
    <ul className="pizzas">
      {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} key={pizza.name}/>
      ))}
    </ul>

    </div>
  )
}
 
function Pizza({pizzaObj}){
  return (
  <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src ={pizzaObj.photoName} alt={pizzaObj.photoName}/>
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "Sold Out": pizzaObj.price}</span>
    </div>
  </li>
  ) 
}

function Footer() {
  const hour = new Date().getHours();
  const openHours = 12;
  const closeHours = 23;
  const isOpen = hour >= openHours && hour <= closeHours;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours ={closeHours} openHours={openHours}  />
      ) : (
        <p>Sorry, we're currently closed. Please visit us between {openHours}:00 and {closeHours}:00.</p>
      )}
    </footer>
  );
}

function Order({closeHours, openHours}){
  return(
    <div className="order">
    <p>
      We're open from {openHours}:00 to {closeHours}:00. Come visit us or order online.
    </p>
    <button className="btn">Order now</button>
  </div>
  )

}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode><App /></React.StrictMode>)