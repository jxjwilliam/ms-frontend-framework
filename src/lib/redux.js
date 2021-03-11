import React from 'react'

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const createStore = reducer => {
  let state
  let listeners = []
  const getState = () => state
  const dispatch = action => {
    state = reducer(state, action)
    listeners.forEach(listener => listener())
  }

  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  }

  dispatch({})

  return { getState, dispatch, subscribe }
}

// to call:
let store = createStore(counter)

const render = () => {
  console.log(store.getState())
}

store.subscribe(render)
render()

const combineReducer = reducers => (state, action) =>
  Object.keys(reducers).reduce((nextState, key) => {
    nextState[key] = reducers[key](state[key], action)

    return nextState
  }, {})

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'FILTER1':
      return action.filter
    default:
      return state
  }
}

// to call:
const todoApp = combineReducer({
  todos,
  visibilityFilter,
})

store = createStore(todoApp)

/**
 *  functions can take other functions as arguments and return other functions,
 *  inside the output function, execute the input function
 */

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
})

const mapDispatchToProps = dispatch => ({
  onTodoClick: id => {
    dispatch({ type: 'TOGGLE_TODO', id })
  },
})

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

// connect()(AddTodo); output dispatch
const AddTodo = connect(
  state => ({}),
  // The 2 argument to connect is mapdispatchtoprops, but at to-do component doesn't need any callback props.
  // It just accepts the dispatch function itself, so I'm returning it as a prop with the same name.
  dispatch => ({ dispatch }),
)(AddTodo)

function connect(mapState, mapDispatch) {
  return class Container extends React.Component {
    render() {
      return <Container {...this.props} {...mapState} {...mapDispatch} />
    }
  }
}

const configureStore = () => {
  const loadState = () => LocalStorage.getItem('redux')
  const saveState = state => LocalStorage.setItem('redux', state)

  const persistedState = loadState()
  const myStore = createStore({ todoApp, persistedState })

  myStore.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos })
    }, 1000),
  )
  return myStore
}
