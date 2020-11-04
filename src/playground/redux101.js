import { createStore } from 'redux'

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT': return { count: state.count + action.incrementBy }
    case 'DECREMENT': return { count: state.count - action.decrementBy }
    case 'SET': return { count: action.setTo }
    default: return state
  }
}
const store = createStore(countReducer)

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = ({ setTo = 0 } = {}) => ({
  type: 'SET',
  setTo
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(incrementCount({ incrementBy: 12 }))
store.dispatch(incrementCount())
store.dispatch(decrementCount({ decrementBy: 27 }))
store.dispatch(decrementCount())
store.dispatch(resetCount({ setTo: 15 }))
store.dispatch(resetCount())

unsubscribe()
