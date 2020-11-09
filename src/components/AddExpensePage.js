import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'

const AddExpensePage = ({ dispatch, history }) => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      buttonText='Add Expense'
      submit={expense => {
        dispatch(addExpense(expense))
        history.push('/')
      }}
    />
  </div>
)

export default connect()(AddExpensePage)
