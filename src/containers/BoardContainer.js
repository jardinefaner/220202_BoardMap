import React, { useState } from "react";
import Board from "../components/Board";

const HALF = 1 / 2;

export default function BoardContainer() {
  const [boardSize, setBoardSize] = useState(1);
  const handleChange = ({ target }) => setBoardSize(target.value);

  const colors = [
    "AntiqueWhite",
    "CadetBlue",
    "Crimson",
    "DarkOrchid",
    "ForestGreen",
    "Khaki",
    "Teal"
  ];
  const totalTiles = boardSize * boardSize;
  const tileSize = (window.innerHeight * HALF) / boardSize;
  const tiles = [];
  for (let i = 0; i < totalTiles; i++) {
    if (totalTiles > 10000) return;
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newTile = {
      backgroundColor: colors[randomIndex],
      height: tileSize,
      width: tileSize
    };
    tiles.push(newTile);
  }
  return (
    <Board
      name="Jardine"
      boardSize={boardSize}
      totalTiles={totalTiles}
      tiles={tiles}
      onChange={handleChange}
    />
  );
}
