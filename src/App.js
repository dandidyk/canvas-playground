import "./App.scss";
import { useState } from "react";
import { generateDots } from "./utilities";
import ListOfDots from "./components/ListOfDots";
import Canvas from "./components/Canvas";

const INITIAL_STATE = generateDots();

const App = () => {
  const [dots, setDots] = useState(INITIAL_STATE);
  const [canvasBg, setCanvasBg] = useState(
    "https://images.unsplash.com/photo-1618924217601-502b99239681?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fHw%3D"
  );

  const handleDragStart = (e) => {
    const id = e.target.id();
    console.log(e.target);
    setDots(
      dots.map((dot) => {
        return {
          ...dot,
          isDragging: dot.id === id,
        };
      })
    );
  };

  const handleDragEnd = (e) => {
    setDots(
      dots.map((dot) => {
        return {
          ...dot,
          isDragging: false,
          x: dot.isDragging ? e.target.attrs.x : dot.x,
          y: dot.isDragging ? e.target.attrs.y : dot.y,
        };
      })
    );
  };

  const changeCoordinate = (value, id, typeOfCoordinate) => {
    setDots(
      dots.map((dot) => {
        return {
          ...dot,
          [typeOfCoordinate]: id === dot.id ? value : dot[typeOfCoordinate],
        };
      })
    );
  };

  return (
    <main className="playground">
      <h1>Dot`s playground</h1>

      <div className="playground__background-input">
        Here you can enter url for background image{" "}
        <input value={canvasBg} onChange={(e) => setCanvasBg(e.target.value)} />
      </div>

      <div className="playground__wrapper">
        <ListOfDots
          dots={dots}
          changeCoordinate={changeCoordinate}
          setDots={setDots}
        />

        <Canvas
          dots={dots}
          canvasBg={canvasBg}
          handleDragEnd={handleDragEnd}
          handleDragStart={handleDragStart}
        />
      </div>
    </main>
  );
};

export default App;
