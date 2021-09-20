/* eslint-disable no-console */
const VillageState = require('./VillageState');
const {
  randomRobot,
  routeRobot,
  goalOrientedRobot,
} = require('./Utilities');

// runRobot(VillageState.random(), randomRobot);
// runRobot(VillageState.random(), routeRobot, []);
runRobot(VillageState.random(), goalOrientedRobot, []);
