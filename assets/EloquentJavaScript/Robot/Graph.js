const buildGraph = (edges) => {
  const graph = Object.create(null);
  const addEdge = (fromPoint, toPoint) => {
    if (graph[fromPoint] === undefined) {
      graph[fromPoint] = [toPoint];
    } else {
      graph[fromPoint].push(toPoint);
    }
  };

  // eslint-disable-next-line no-restricted-syntax
  for (const [fromPoint, toPoint] of edges.map((r) => r.split('-'))) {
    addEdge(fromPoint, toPoint);
    addEdge(toPoint, fromPoint);
  }
  return graph;
};

module.exports = buildGraph;
