const roadGraph = require('./roads');
// const ramdomItem = require('./random-item');
const { randomPick } = require('./Utilities');

class VillageState {
  constructor(place, parcels) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.place].includes(destination)) return this;

    const parcels = this.parcels.map((p) => {
      if (p.place !== this.place) return p;
      return { place: destination, address: p.address };
    }).filter((p) => p.place !== p.address);

    return new VillageState(destination, parcels);
  }
}

VillageState.random = (parcelCount = 5) => {
  const parcels = [];
  for (let i = 0; i < parcelCount; i += 1) {
    const address = randomPick(Object.keys(roadGraph));
    let place;
    do {
      place = randomPick(Object.keys(roadGraph));
    } while (place === address);
    parcels.push({ place, address });
  }
  return new VillageState('Post Office', parcels);
};

const runRobot = (state, robot, memory) => {
  for (let turn = 0; ; turn += 1) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns.`);
      break;
    }

    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
};

module.exports = {
  VillageState,
  runRobot,
};
