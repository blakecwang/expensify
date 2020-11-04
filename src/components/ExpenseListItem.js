import React from 'react'

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
  </tr>
)

export default ExpenseListItem
