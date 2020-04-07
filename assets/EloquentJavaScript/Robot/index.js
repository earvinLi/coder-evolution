/* eslint-disable no-console */
const VillageState = require('./VillageState');
const {
  randomRobot,
  routeRobot,
  goalOrientedRobot,
} = require('./Utilities');

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

// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
runRobot(VillageState.random(), goalOrientedRobot, []);
