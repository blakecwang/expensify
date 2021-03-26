import { addExpense, editExpense, removeExpense } from "../../actions/expenses"

test("should return remove expense action object", () => {
  const action = removeExpense("123abc")

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  })
})

//export const addExpense = (
//  {
//    description = "",
//    note = "",
//    amount = 0,
//    date = 0
//  } = {}
//) => ({
//  type: "ADD_EXPENSE",
//  expense: {
//    id: uuid(),
//    description,
//    note,
//    amount,
//    date
//  }
//})
//
//export const removeExpense = (id) => ({
//  type: "REMOVE_EXPENSE",
//  id
//})
//
//export const editExpense = ({ id, updates = {}}) => ({
//  type: "EDIT_EXPENSE",
//  id,
//  updates
//})
