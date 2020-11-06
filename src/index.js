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

store.dispatch(addExpense({ description: 'gas bill', amount: 1000, date: 2 }))
store.dispatch(addExpense({ description: 'water bill', amount: 2000, date: 3 }))
store.dispatch(addExpense({ description: 'rent', amount: 3000, date: 1 }))

// amount
//   gas bill
//   water bill
//   rent
//
// date
//   rent
//   gas bill
//   water bill

// Hacky way to suppress warnings
const warn = console.warn
console.warn = (...warnings) => {
  const warningsToSuppress = [
    'componentWillReceiveProps has been renamed',
    'componentWillUpdate has been renamed'
  ]

  const warningsICareAbout = warnings.filter(warning => (
    !(new RegExp(warningsToSuppress.join('|')).test(warning))
  ))

  warn(...warningsICareAbout)
}

const state = store.getState()
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))
