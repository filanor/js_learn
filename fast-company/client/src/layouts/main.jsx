import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
  const { error, initialize, progress, status } = useMockData();

  const handleInitialize = () => {
    initialize();
  };
  return (
    <div className="mt-3 container">
      <div className="row">
        <h1 className="text-center">MAIN PAGE</h1>
        <h3>Инициализация данных а FireBase</h3>
        <ul>
          <li>Status:{status}</li>
          <li>Progress: {progress}% </li>
          {error && <li>{error}</li>}
        </ul>
        <button onClick={handleInitialize}>Инициализировать</button>
      </div>
    </div>
  );
};

export default Main;
