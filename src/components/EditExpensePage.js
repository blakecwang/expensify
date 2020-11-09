import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = ({ expense, dispatch, history }) => (
  <div>
    <h1>Edit Expense {expense.id}</h1>
    <ExpenseForm
      buttonText='Edit Expense'
      submit={(modExpense) => {
        dispatch(editExpense({ id: expense.id, updates: modExpense }))
        history.push('/')
      }}
      expense={expense}
    />
    <div>
      <button onClick={() => {
        dispatch(removeExpense(expense.id))
        history.push('/')
      }}>
        Remove Expense
      </button>
    </div>
  </div>
)

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps)(EditExpensePage)
