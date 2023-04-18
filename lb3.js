function makeMatrixSymmetric(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i !== j && matrix[i][j] === 0) {
        matrix[i][j] = matrix[j][i];
      }
    }
  }
  return matrix;
}

function nearestNeighbor(matrix) {
  const visited = new Set();
  let currentNode = 0;
  let path = [currentNode];
  visited.add(currentNode);

  while (visited.size < matrix.length) {
    let minDistance = Infinity;
    let closestNode = -1;

    for (let i = 0; i < matrix.length; i++) {
      if (i !== currentNode && !visited.has(i) && matrix[currentNode][i] < minDistance && matrix[currentNode][i] > 0) {
        minDistance = matrix[currentNode][i];
        closestNode = i;
      }
    }

    if (closestNode !== -1) {
      currentNode = closestNode;
      visited.add(currentNode);
      path.push(currentNode);
    } else {
      break;
    }
  }

  if (matrix[path[path.length - 1]][0] > 0) {
    path.push(0);
  }
  
  return path;
}

function calculateTotalDistance(matrix, path) {
  let totalDistance = 0;

  for (let i = 0; i < path.length - 1; i++) {
    if (matrix[path[i]] && matrix[path[i]][path[i + 1]]) {
      totalDistance += matrix[path[i]][path[i + 1]];
    }
  }

  return totalDistance;
}

const matrix = [
  [0, 0, 69, 60, 10, 20],
  [0, 0, 0, 31, 39, 2],
  [69, 0, 0, 0, 59, 0],
  [60, 31, 0, 0, 0, 36],
  [10, 39, 59, 0, 0, 79],
  [20, 2, 0, 36, 79, 0]
];

const symmetricMatrix = makeMatrixSymmetric(matrix);
const path = nearestNeighbor(symmetricMatrix);
const totalDistance = calculateTotalDistance(symmetricMatrix, path);

console.log('Path:', path);
console.log('Total distance:', totalDistance);
