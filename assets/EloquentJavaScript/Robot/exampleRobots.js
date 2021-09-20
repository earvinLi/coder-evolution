const roadGraph = require('./roads');
// const ramdomItem = require('./random-item');
const randomPick = (array) => {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
};
// const dijkstrajs = require('./dijkstrajs');

// Random Route
const randomRobot = (state) => ({ direction: randomPick(roadGraph[state.place]) });

// Mail Route
const mailRoute = [
  'Alice\'s House',
  'Cabin',
  'Alice\'s House',
  'Bob\'s House',
  'Town Hall',
  'Daria\'s House',
  'Ernie\'s House',
  'Grete\'s House',
  'Shop',
  'Grete\'s House',
  'Farm',
  'Marketplace',
  'Post Office',
];

const routeRobot = (state, memory) => {
  if (memory.length === 0) {
    memory = mailRoute;
  }
  return { direction: memory[0], memory: memory.slice(1) };
};

// Goal Oriented
const findRoute = (graph, fromPoint, toPoint) => {
  const work = [{ at: fromPoint, route: [] }];

  for (let i = 0; i < work.length; i += 1) {
    const { at, route } = work[i];

    // eslint-disable-next-line no-restricted-syntax
    for (const place of graph[at]) {
      if (place === toPoint) return route.concat(place);
      if (!work.some((w) => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }

  return true;
};

const goalOrientedRobot = ({ place, parcels }, route) => {
  if (route.length === 0) {
    const parcel = parcels[0];
    if (parcel.place !== place) route = findRoute(roadGraph, place, parcel.place);
    else route = findRoute(roadGraph, place, parcel.address);
  }

  return { direction: route[0], memory: route.slice(1) };
};

module.exports = {
  randomPick,
  randomRobot,
  routeRobot,
  goalOrientedRobot,
};
