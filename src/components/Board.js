import React from "react";

export default function Board(props) {
  const { name, boardSize, totalTiles, tiles, onChange } = props;
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <label>Size of Board</label>
      <br />
      <input type="number" placeholder="1" onChange={onChange} />
      <div id="board">
        {tiles.map((tile) => {
          return <div style={tile}></div>;
        })}
      </div>
      <p>
        This is a {boardSize || 1}x{boardSize || 1} map!
      </p>
      <p>There are {totalTiles || 1} tiles here.</p>
    </div>
  );
}
