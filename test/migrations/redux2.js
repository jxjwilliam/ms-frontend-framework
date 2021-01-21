// next=store.dispatch, redux-logger
const logger = store => next => {
  if (!console.group) {
    return next
  }
  return action => {
    console.group(action.type)
    console.log('%c prev state', 'color: gray', store.getState())
    console.log('%c state', 'color: blue', action)
    const returnValue = next(action)
    console.log('%c next state', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

// a function return function return function
// next = store.dispatch, redux-thunk
const promise = store => next => action => {
  if (typeof action.then === 'function') {
    return action.then(next)
  }
  return next(action)
}

// applyMiddleware
const wraDispatchWithMiddlewares = (store, middlewares) => {
  middlewares
    .slice()
    .reverse()
    // eslint-disable-next-line no-return-assign
    .forEach(middleware => (store.dispatch = middleware(store)(store.dispatch)))
}

const configureStore = () => {
  const store = createStore(todoApp)
  const middlewares = [promise]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger)
  }
  wraDispatchWithMiddlewares(store, middlewares)
  return store
}

//  function = store => store.dispatch => action

/// ////////////////////////

export function applyMiddleware(middleware) {
  //
  return createStore => (...args) => {
    const store = createStore(...args)
    let { dispatch } = store

    const midApi = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args), // Native dispatch
    }
    dispatch = middleware(midApi)(store.dispatch) // Note that when the dispatch is rewritten, the native dispatch is also saved and transferred to the middleware.
    return {
      ...store,
      dispatch, // The dispatch here has been rewritten
    }
  }
}

// The dispatch taken here is the rewritten dispatch. next is equivalent to the original dispatch.
const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
    // The dispatch here is equivalent to middle(store)(store.dispatch)(action)
  }

  return next(action) // If the return is not a function, it will be directly dispatch ed when there is no middleware.
  // Note that next here is equivalent to the native store.dispatch
}
