import "../App.scss";
import { Stage, Layer, Circle } from "react-konva";

const Canvas = ({ dots, canvasBg, handleDragEnd, handleDragStart }) => {
  return (
    <div
      className="playground__canvas"
      style={{ backgroundImage: `url("${canvasBg}")` }}
    >
      <Stage width={window.innerWidth - 312} height={550}>
        <Layer>
          {dots.map((dot) => (
            <Circle
              key={dot.id}
              id={dot.id}
              x={dot.x}
              y={dot.y}
              radius={8}
              fill={dot.color}
              opacity={0.8}
              draggable
              shadowColor="black"
              shadowBlur={10}
              shadowOpacity={0.6}
              shadowOffsetX={dot.isDragging ? 10 : 5}
              shadowOffsetY={dot.isDragging ? 10 : 5}
              scaleX={dot.isDragging ? 1.5 : 1}
              scaleY={dot.isDragging ? 1.5 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default Canvas;
