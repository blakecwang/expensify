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

store.dispatch(addExpense({ description: 'gas bill', amount: 1000, createdAt: 2 }))
store.dispatch(addExpense({ description: 'water bill', amount: 2000, createdAt: 3 }))
store.dispatch(addExpense({ description: 'rent', amount: 3000, createdAt: 1 }))

// amount
//   gas bill
//   water bill
//   rent
//
// date
//   rent
//   gas bill
//   water bill

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
