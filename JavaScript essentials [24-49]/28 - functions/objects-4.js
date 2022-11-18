function maximumScore(tiles) {
  let sum = 0;

  for (let i = 0; i < tiles.length; i += 1) {
    const tile = tiles[i];

    sum += tile.score;
  }

  return sum;
}

const tiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];

const result = maximumScore(tiles);

console.log(result);