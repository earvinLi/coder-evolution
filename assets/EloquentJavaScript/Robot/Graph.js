// Road Data
const roads = [
  'Alice\'s House-Bob\'s House',
  'Alice\'s House-Cabin',
  'Alice\'s House-Post Office',
  'Bob\'s House-Town Hall',
  'Daria\'s House-Ernie\'s House',
  'Daria\'s House-Town Hall',
  'Ernie\'s House-Grete\'s House',
  'Grete\'s House-Farm',
  'Grete\'s House-Shop',
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

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

console.log('Graph: ', buildGraph(roads));

module.exports = buildGraph(roads);
