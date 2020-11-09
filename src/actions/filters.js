export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

export const setStartDate = (date = undefined) => {
  console.log('date', date)
  return {
  type: 'SET_START_DATE',
  date
  }
}

export const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
})

export const sortByAmount = () => ({ type: 'SORT_BY_AMOUNT' })

export const sortByDate = () => ({ type: 'SORT_BY_DATE' })
