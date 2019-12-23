// Action Helper
export const createActionCreator = (type, ...argNames) => (...args) => {
  const action = { type };
  argNames.forEach((arg, index) => {
    action[argNames[index]] = args[index];
  });
  return action;
};

// Reducer Helper
export const createReducer = (initialState, handlers) => (state = initialState, action) => {
  const hasActionType = Object.prototype.hasOwnProperty.call(handlers, action.type);
  if (hasActionType) return handlers[action.type](state, action);
  return state;
};
