import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { DATE_FORMAT } from '../globals'

const ExpenseListItem = ({
  id,
  description,
  note,
  amount,
  date
}) => (
  <tr>
    <td>
      <Link to={`/edit/${id}`}>{id}</Link>
    </td>
    <td>{description}</td>
    <td>{note}</td>
    <td>{amount / 100}</td>
    <td>{moment(date).format(DATE_FORMAT)}</td>
  </tr>
)

export default ExpenseListItem
