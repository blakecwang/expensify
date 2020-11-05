import React from 'react'
import RemoveExpenseButton from './RemoveExpenseButton'

const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  createdAt
}) => (
  <tr>
    <td>{id}</td>
    <td>{description}</td>
    <td>{note}</td>
    <td>{amount}</td>
    <td>{createdAt}</td>
    <td><RemoveExpenseButton id={id} /></td>
  </tr>
)

export default ExpenseListItem
