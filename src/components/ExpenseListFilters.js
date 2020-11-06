import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseListFilters = ({ filters, dispatch }) => (
  <div>
    <input type='text' value={filters.text} onChange={(e) => {
      dispatch(setTextFilter(e.target.value))
    }}/>
    <select
      value={filters.sortBy}
      onChange={(e) => {
        switch (e.target.value) {
          case 'date':
            dispatch(sortByDate())
            break
          case 'amount':
            dispatch(sortByAmount())
        }
      }}
    >
      <option value='amount'>Amount</option>
      <option value='date'>Date</option>
    </select>
  </div>
)

const mapStateToProps = state => ({ filters: state.filters })

export default connect(mapStateToProps)(ExpenseListFilters)
