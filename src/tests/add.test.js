const add = (a, b) => a + b
const generateGreeting = (name) => `Hello ${name}`

test("should add two numbers", () => {
  expect(add(3, 4)).toBe(7)
})

test("should include name in greeting", () => {
  expect(generateGreeting("Blake")).toBe("Hello Blake")
})
