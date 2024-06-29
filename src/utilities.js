export function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateDots() {
  return [...Array(3)].map((_, i) => ({
    id: Date.now() + i + " ",
    x: randomIntFromInterval(1, 500),
    y: randomIntFromInterval(1, 500),
    isDragging: false,
    color: getRandomColor(),
  }));
}
