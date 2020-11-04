import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import { addExpense, removeExpense, editExpense } from './actions/expenses'
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate
} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

import 'normalize.css/normalize.css'
import './index.scss'

const store = configureStore()

store.dispatch(addExpense({ description: 'gas bill' }))
store.dispatch(addExpense({ description: 'water bill' }))
store.dispatch(setTextFilter('water'))

setTimeout(() => {
  store.dispatch(setTextFilter('gas'))
}, 3000)

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
