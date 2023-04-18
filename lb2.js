function dijkstra(matrix, startNode) {
  const n = matrix.length;
  const distances = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(false);

  distances[startNode] = 0;

  for (let i = 0; i < n; i++) {
    let minIndex = -1;

    for (let j = 0; j < n; j++) {
      if (!visited[j] && (minIndex === -1 || distances[j] < distances[minIndex])) {
        minIndex = j;
      }
    }

    if (distances[minIndex] === Infinity) {
      break;
    }

    visited[minIndex] = true;

    for (let j = 0; j < n; j++) {
      if (matrix[minIndex][j] !== 0 && distances[minIndex] + matrix[minIndex][j] < distances[j]) {
        distances[j] = distances[minIndex] + matrix[minIndex][j];
      }
    }
  }

  return distances;
}

const matrix = [
  [0, 0, 0, 0, 86, 94, 51, 82],
  [0, 0, 81, 0, 20, 87, 0, 0],
  [0, 81, 0, 83, 41, 0, 0, 0],
  [0, 0, 83, 0, 8, 0, 0, 0],
  [86, 20, 41, 8, 0, 40, 0, 54],
  [94, 87, 0, 0, 40, 0, 89, 0],
  [51, 0, 0, 0, 0, 89, 0, 18],
  [82, 0, 0, 0, 54, 0, 18, 0]
];

const startNode = 0;
const shortestPaths = dijkstra(matrix, startNode);

console.log(`Найкоротші шляхи від вершини ${startNode}:`);
for (let i = 0; i < shortestPaths.length; i++) {
  console.log(`Від вершини ${startNode} до вершини ${i}: ${shortestPaths[i]}`);
}
