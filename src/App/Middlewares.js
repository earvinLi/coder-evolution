// API Calling Middleware
const apiCallingMiddleware = ({ dispatch, getState }) => (next) => async (action) => {
  const {
    apiCallingFunction,
    // payload = {},
    shouldCallAPI = () => true,
    types,
  } = action;

  if (!types) return next(action);
  if (
    !Array.isArray(types)
    || types.length !== 3
    || !types.every((type) => typeof type === 'string')
  ) throw new Error('Expected an array of three string types.');
  if (typeof apiCallingFunction !== 'function') throw new Error('Expected an API calling function.');
  if (!shouldCallAPI(getState())) return false;

  const [
    failType,
    requestType,
    succeedType,
  ] = types;

  dispatch({ type: requestType });

  try {
    const response = await apiCallingFunction(getState());
    return dispatch({ type: succeedType, ...response });
  } catch (error) {
    // TODO: Enable the reducers to handle failure cases
    return dispatch({ type: failType, error });
  }
};

export default apiCallingMiddleware;
