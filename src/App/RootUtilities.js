// Fetch Helper
const baseURL = process.env.REACT_APP_PROD_BASE_URL;

const handleFetchError = (err) => {
  console.warn(err);
  return new Response(JSON.stringify({
    code: 400,
    message: 'Bad Request',
  }));
};

export const fetchRequest = async (url, options = {}) => {
  const optionsToUse = options;
  optionsToUse.headers = options.headers || {};
  // optionsToUse.headers.authorization = `Bearer ${token || ''}`;
  optionsToUse.headers['Content-Type'] = 'application/json';

  const fetched = await (await (fetch(`${baseURL}${url}`, optionsToUse))
    .catch(handleFetchError)).json();
  return fetched;
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

export const getAPICallingReducerHandlers = (types, reducers) => {
  const apiCallingReducerHandlers = {};
  types.forEach((type, index) => {
    apiCallingReducerHandlers[type] = reducers[index];
  });
  return apiCallingReducerHandlers;
};
