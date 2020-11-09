import React, { useState } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { DATE_FORMAT } from '../globals'

const ExpenseForm = ({ buttonText, submit, expense }) => {
  const [description, setDescription] = useState(expense ? expense.description : '')
  const [note, setNote] = useState(expense ? expense.note : '')
  const [amount, setAmount] = useState(expense ? expense.amount / 100 : '')
  const [date, setDate] = useState(expense ? moment(expense.date) : moment())
  const [dateFocused, setDateFocused] = useState(false)
  const [descriptionError, setDescriptionError] = useState('')
  const [amountError, setAmountError] = useState('')

  const AMOUNT_REGEXP = /^\d*(\.\d{0,2})?$/

  const onSubmit = e => {
    e.preventDefault()

    if (!description) {
      setDescriptionError('Please provide a description!')
    } else {
      setDescriptionError('')
    }

    if (!amount) {
      setAmountError('Please provide an amount!')
    } else {
      setAmountError('')
    }

    submit({
      amount: parseFloat(amount, 10) * 100,
      date: date.valueOf(),
      description,
      note,
    })
  }

  return (
    <div>
      {descriptionError && <div><label htmlFor='description'>{descriptionError}</label></div>}
      {amountError && <div><label htmlFor='amount'>{amountError}</label></div>}
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='description'>Description</label>
        </div>
        <div>
          <input
            id='description'
            type='text'
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder='rent'
            autoFocus
          />
        </div>

        <div>
          <label htmlFor='amount'>Amount</label>
        </div>
        <div>
          <input
            id='amount'
            type='text'
            value={amount}
            onChange={e => {
              const input = e.target.value

              if (input.match(AMOUNT_REGEXP)) {
                setAmount(input)
                setAmountError('')
              } else {
                setAmountError('Only valid numbers please!')
              }
            }}
            placeholder='1000000.00'
          />
        </div>

        <div>
          <label htmlFor='date'>Date</label>
        </div>
        <div>
          <SingleDatePicker
            id='date'
            date={date}
            onDateChange={date => date && setDate(date)}
            focused={dateFocused}
            onFocusChange={({ focused }) => setDateFocused(focused)}
            displayFormat={DATE_FORMAT}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
        </div>

        <div>
          <label htmlFor='note'>Note</label>
        </div>
        <div>
          <textarea
            id='note'
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder='Expensive!'
          ></textarea>
        </div>

        <div>
          <button>{buttonText}</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseForm
