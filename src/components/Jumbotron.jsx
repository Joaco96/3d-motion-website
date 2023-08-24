import React from "react";
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png"

function Jumbotron() {

    const handlerLearnMore = () =>{
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    };

  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">MERCEDEZ BENZ</h2>
      <p className="text" >AMG GT</p>
      <span className="description" >
        A tu medida.
      </span>
      <ul className="links">
        <li>
            <button className="button">Consultar</button>
        </li>
        <li>
            <a className="link"  onClick={handlerLearnMore}>Saltear</a>
        </li>
      </ul>
   </div>
  );
}

export default Jumbotron;
