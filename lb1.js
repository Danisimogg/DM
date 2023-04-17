
function primAlgorithm(matrix) {
    const n = matrix.length;
    const selected = new Array(n).fill(false);
    const key = new Array(n).fill(Infinity);
    const parent = new Array(n).fill(-1);
    let result = [];

    // Встановлюємо ключ першої вершини дорівнює 0
    key[0] = 0;

    for (let count = 0; count < n - 1; count++) {
        // Знаходимо найменший ключ з вершин, що ще не були обрані
        let u = -1;

        for (let i = 0; i < n; i++) {
            if (!selected[i] && (u === -1 || key[i] < key[u])) {
                u = i;
            }
        }

        // Відмічаємо обрану вершину
        selected[u] = true;

        // Оновлюємо значення ключів та батьківських вершин для суміжних вершин
        for (let v = 0; v < n; v++) {
            if (matrix[u][v] && !selected[v] && matrix[u][v] < key[v]) {
                parent[v] = u;
                key[v] = matrix[u][v];
            }
        }
    }

    // Збираємо результат
    for (let i = 1; i < n; i++) {
        result.push({
            from: parent[i],
            to: i,
            weight: matrix[i][parent[i]]
        });
    }

    return result;
}

const adjacencyMatrix = [
   [0, 0, 7, 0, 0, 0, 46, 98],
    [0, 0, 33, 0, 0, 99, 0, 0],
    [7, 33, 0, 99, 92, 28, 0, 64],
    [0, 0, 99, 0, 15, 52, 0, 0],
    [0, 0, 92, 15, 0, 0, 0, 58],
    [0, 99, 28, 52, 0, 0, 0, 0],
    [46, 0, 0, 0, 0, 0, 0, 36],
    [98, 0, 64, 0, 58, 0, 36, 0],
];

const mst = primAlgorithm(adjacencyMatrix);

console.log("Edge : Weight");
mst.forEach(edge => {
    console.log(`${edge.from} - ${edge.to} : ${edge.weight}`);
});
