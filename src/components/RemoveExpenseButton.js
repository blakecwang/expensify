import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const RemoveExpenseButton = ({ id, dispatch }) => {
  const handleRemoveExpense = () => {
    dispatch(removeExpense(id))
  }

  return (
    <button onClick={handleRemoveExpense}>
      Remove Expense
    </button>
  )
}

export default connect()(RemoveExpenseButton)
