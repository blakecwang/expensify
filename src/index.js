import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'

import 'normalize.css/normalize.css'
import './index.scss'

// Hacky way to suppress warnings
const warn = console.warn
console.warn = (...warnings) => {
  const warningsToSuppress = [
    'componentWillReceiveProps has been renamed',
    'componentWillUpdate has been renamed',
    'failed to load SourceMap' // not working for some reason
  ]

  const warningsICareAbout = warnings.filter(warning => (
    !(new RegExp(warningsToSuppress.join('|')).test(warning))
  ))

  warn(...warningsICareAbout)
}

const store = configureStore()
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'))

// seed some data for dev convenience
import { addExpense } from './actions/expenses'
import moment from 'moment'
store.dispatch(addExpense({ description: 'ghi', amount: 123, date: moment().subtract(5, 'day') }))
store.dispatch(addExpense({ description: 'def', amount: 456, date: moment() }))
store.dispatch(addExpense({ description: 'abc', amount: 789, date: moment().add(5, 'day') }))
