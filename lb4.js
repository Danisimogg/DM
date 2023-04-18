function findPath(matrix, source, sink, visited, path) {
    if (source === sink) {
        return path;
    }

    visited[source] = true;
    for (let i = 0; i < matrix.length; i++) {
        if (!visited[i] && matrix[source][i] > 0) {
            let currentPath = findPath(matrix, i, sink, visited, [...path, {from: source, to: i, capacity: matrix[source][i]}]);
            if (currentPath) {
                return currentPath;
            }
        }
    }

    return null;
}

function fordFulkerson(matrix, source, sink) {
    let maxFlow = 0;
    let visited = new Array(matrix.length).fill(false);
    let path = findPath(matrix, source, sink, visited, []);

    while (path) {
        let flow = path.reduce((min, edge) => Math.min(min, edge.capacity), Infinity);

        path.forEach(edge => {
            matrix[edge.from][edge.to] -= flow;
            matrix[edge.to][edge.from] += flow;
        });

        maxFlow += flow;
        visited.fill(false);
        path = findPath(matrix, source, sink, visited, []);
    }

    return maxFlow;
}

let matrix = [
    [0, 20, 20, 20, 0, 0, 0, 0],
    [0, 0, 0, 0, 30, 0, 0, 0],
    [0, 10, 0, 0, 0, 10, 20, 0],
    [0, 0, 0, 0, 0, 15, 0, 0],
    [0, 0, 10, 0, 0, 10, 0, 20],
    [0, 0, 0, 0, 0, 0, 10, 20],
    [0, 0, 0, 10, 0, 0, 0, 20],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

let source = 0;
let sink = 7;
let maxFlow = fordFulkerson(matrix, source, sink);
console.log("Максимальний потік:", maxFlow);
