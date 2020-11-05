import React from 'react'
import { connect } from 'react-redux'
import getVisibleExpenses from '../selectors/expenses'
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = ({ expenses, filters }) => (
  <div>
    <h1>Expense List</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Description</th>
          <th>Note</th>
          <th>Amount</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
        getVisibleExpenses(expenses, filters).map(expense => (
          <ExpenseListItem key={expense.id} {...expense}/>
        ))
      }
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state) => ({
  expenses: state.expenses,
  filters: state.filters
})

export default connect(mapStateToProps)(ExpenseList)
