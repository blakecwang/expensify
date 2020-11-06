import React from 'react'
import RemoveExpenseButton from './RemoveExpenseButton'

const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  date
}) => (
  <tr>
    <td>{id}</td>
    <td>{description}</td>
    <td>{note}</td>
    <td>{amount}</td>
    <td>{date}</td>
    <td><RemoveExpenseButton id={id} /></td>
  </tr>
)

export default ExpenseListItem
