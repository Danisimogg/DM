function degree(matrix, node) {
  let degree = 0;
  for (let i = 0; i < matrix[node].length; i++) {
    if (matrix[node][i] === 1) {
      degree++;
    }
  }
  return degree;
}

function areIsomorphic(matrix1, matrix2) {
  if (matrix1.length !== matrix2.length) {
    return false;
  }

  const size = matrix1.length;
  const degrees1 = [];
  const degrees2 = [];

  for (let i = 0; i < size; i++) {
    degrees1.push(degree(matrix1, i));
    degrees2.push(degree(matrix2, i));
  }

  degrees1.sort();
  degrees2.sort();

  for (let i = 0; i < size; i++) {
    if (degrees1[i] !== degrees2[i]) {
      return false;
    }
  }

  return true;
}

const G = [
  [0, 1, 1, 0],
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 0, 1, 0]
];

const H = [
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0]
];

// не ізоморфний масив H = [
//   [0, 1, 0, 0],
//   [1, 0, 1, 0],
//   [0, 1, 0, 1],
//   [0, 0, 1, 0]
// ]
console.log(areIsomorphic(G, H)); // повинно вивести true, оскільки графи ізоморфні
