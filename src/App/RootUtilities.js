// Fetch Helper
export const fetchRequest = async (url, options = {}) => {
  const optionsToUse = options;
  optionsToUse.headers = options.headers || {};
  // optionsToUse.headers.authorization = `Bearer ${token || ''}`;
  optionsToUse.headers['Content-Type'] = 'application/json';

  try {
    const fetchedJSON = await fetch(url, optionsToUse);
    const fetched = await fetchedJSON.json();
    return fetched;
  } catch (error) {
    throw new Error(`Fail to fetch. ${error}`);
  }
};

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
