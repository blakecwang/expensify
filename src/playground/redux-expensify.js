import { createStore, combineReducers } from 'redux'
import { v1 as uuid } from 'uuid'



const demoState = {
  expenses: [
    {
      id: 'jhgafdsakg',
      description: 'January rent',
      note: 'how much rent I paid in January',
      amount: 260000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})


const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = ({ id, updates }) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          }
        } else {
          return expense
        }
      })
    default:
      return state
  }
}

const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})
const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT'})
const sortByDate = () => ({ type: 'SORT_BY_DATE' })
const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date
})
const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
})

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'createdAt'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

const getVisibleExpenses = (expenses, {
  text,
  sortBy,
  startDate,
  endDate
}) => {
  const filteredExpenses = expenses.filter((expense) => {
    const lowerCaseText = text.toLowerCase()
    const descriptionMatch = expense.description.toLowerCase().includes(lowerCaseText)
    const noteMatch = expense.note.toLowerCase().includes(lowerCaseText)

    const textMatch = descriptionMatch || noteMatch
    const startDateMatch = expense.createdAt >= startDate
    const endDateMatch = expense.createdAt <= endDate

    return textMatch && startDateMatch && endDateMatch
  })

  return filteredExpenses.sort((expense1, expense2) => {
    if (expense1[sortBy] > expense2[sortBy]) {
      return 1
    } else {
      return -1
    }
  })
}

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
  console.log('filters', state.filters)
  console.log('visibleExpenses', visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'one' }))
const expenseTwo = store.dispatch(addExpense({ description: 'two', createdAt: 0, amount: 5000 }))
const expenseThree = store.dispatch(addExpense({ description: 'two', createdAt: 1, amount: 4000 }))

store.dispatch(setTextFilter('two'))
store.dispatch(setStartDate(-100))
store.dispatch(setEndDate(100))
store.dispatch(sortByAmount())
store.dispatch(sortByDate())
