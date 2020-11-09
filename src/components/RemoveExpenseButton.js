import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../actions/expenses'

const RemoveExpenseButton = ({ id, dispatch }) => (
  <button onClick={() => dispatch(removeExpense(id))}>Remove</button>
)

export default connect()(RemoveExpenseButton)
