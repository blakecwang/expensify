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

    const textMatch = descriptionMatch || noteMatch
    const startDateMatch = typeof startDate === 'undefined' ||
      expense.date >= startDate
    const endDateMatch = typeof endDate === 'undefined' ||
      expense.date <= endDate

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
