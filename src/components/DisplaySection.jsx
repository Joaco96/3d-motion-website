import React from "react";

function DisplaySection({triggerPreview}) {
  const handleScrollToTop = () => {
    window.scrollTo({top:0, left:0, behavior: "smooth"})
  };

  return (
    <div className="display-section wrapper">
      <h2 className="title">EQUIPAMIENTO DESTACADO</h2>
      <p className="text">Brillante</p>
      <span className="description">
      Descubrí los aspectos destacados del exterior del AMG Gt de Mercedes-Benz. 
      </span>
      <button className="button" onClick={triggerPreview}>Probar</button>
      <button className="back-button" onClick={handleScrollToTop}>ARRIBA</button>
    </div>
  );
}

export default DisplaySection;
