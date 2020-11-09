import moment from 'moment'

export default (expenses, {
  text,
  sortBy,
  startDate,
  endDate
}) => {
  const filteredExpenses = expenses.filter((expense) => {
    const lowerCaseText = text.toLowerCase()
    const descriptionMatch = expense.description.toLowerCase().includes(lowerCaseText)
    const noteMatch = expense.note.toLowerCase().includes(lowerCaseText)
    const expenseMoment = moment(expense.date)

    const textMatch = descriptionMatch || noteMatch
    const startDateMatch = startDate ? startDate.isSameOrBefore(expenseMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(expenseMoment, 'day') : true

    return textMatch && startDateMatch && endDateMatch
  })

  return filteredExpenses.sort((expense1, expense2) => {
    if (expense1[sortBy] > expense2[sortBy]) {
      return 1
    } else {
      return -1
    }
  })
}
