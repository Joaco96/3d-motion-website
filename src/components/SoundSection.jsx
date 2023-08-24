import React from "react";

function SoundSection() {

  const handlerLearnMore = () => {
    const element = document.querySelector(".display-section");
    window.scrollTo({
      top: element?.getBoundingClientRect().bottom,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sound-section wrapper">
      <div className="body">
        <div className="sound-section-content content">
          <h2 className="title">CLASE MUNDIAL</h2>
          <p className="text">UN ÍCONO</p>
          <span className="description">
            Celebrtamos cada ruta que tomes.
          </span>
          <ul className="links">
            <li>
              <button className="button">Consultar</button>
            </li>
            <li>
              <a className="link" onClick={handlerLearnMore}>Saltear</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SoundSection;
