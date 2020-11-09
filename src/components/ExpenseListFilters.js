import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from '../actions/filters'
import { DATE_FORMAT } from '../globals'

const ExpenseListFilters = ({ filters, dispatch }) => {
  const [dateFocusedInput, setDateFocusedInput] = useState(null)

  return (
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
      <DateRangePicker
        startDate={filters.startDate}
        startDateId='start-date'
        endDate={filters.endDate}
        endDateId='end-date'
        onDatesChange={({ startDate, endDate }) => {
          dispatch(setStartDate(startDate))
          dispatch(setEndDate(endDate))
        }}
        focusedInput={dateFocusedInput}
        onFocusChange={focusedInput => setDateFocusedInput(focusedInput)}
        displayFormat={DATE_FORMAT}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  )
}

const mapStateToProps = state => ({ filters: state.filters })

export default connect(mapStateToProps)(ExpenseListFilters)
