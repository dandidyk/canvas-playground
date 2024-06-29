import "../App.scss";
import { getRandomColor } from "../utilities";

const ListOfDots = ({ dots, changeCoordinate, setDots }) => {
  return (
    <div>
      <ul className="playground__list">
        {dots.map(({ id, x, y }) => (
          <li key={id} className="playground__element">
            <div>id: {id}</div>

            <label>
              <span>x:</span>
              <input
                value={Math.round(x)}
                onChange={(e) => changeCoordinate(e.target.value, id, "x")}
                type="number"
                min={0}
                max={10000}
              />
            </label>
            <label>
              <span>y:</span>
              <input
                value={Math.round(y)}
                onChange={(e) => changeCoordinate(e.target.value, id, "y")}
                type="number"
                min={0}
                max={10000}
              />
            </label>
            <div>
              <button
                className="playground__delete"
                onClick={() => setDots(dots.filter((dot) => id !== dot.id))}
              >
                Delete the Dot
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="playground__create"
        onClick={() =>
          setDots([
            ...dots,
            { x: 0, y: 0, id: Date.now(), color: getRandomColor() },
          ])
        }
      >
        Create a new Dot
      </button>
    </div>
  );
};

export default ListOfDots;
