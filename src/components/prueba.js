import React from "react";

const Prueba = () => {
  async function loadInfo() {
    try {
      const request = await fetch(`${process.env.REACT_APP_API_URL}`);
      const json = await request.json();
      console.log(json);
    } catch (error) {}
  }

  loadInfo();
  return (
    <div>
      <h1>Prueba</h1>
    </div>
  );
};

export default Prueba;
