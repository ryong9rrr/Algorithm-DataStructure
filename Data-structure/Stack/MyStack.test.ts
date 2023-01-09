import MyStack from "./MyStack"

describe("Stack ADT test", () => {
  test("initialize", () => {
    const myStack = new MyStack<number>()
    expect(myStack.size).toEqual(0)
    expect(myStack.pop()).toEqual(undefined)
    expect(myStack.size).toEqual(0)
  })

  test("push()", () => {
    const myStack = new MyStack<number>()
    expect(myStack.top).toEqual(undefined)
    myStack.push(1)
    myStack.push(2)
    myStack.push(3)

    expect(myStack.top).toEqual(3)
    expect(myStack.size).toEqual(3)
  })

  test("pop()", () => {
    const myStack = new MyStack<number>()
    myStack.push(1)
    myStack.push(2)

    const extracted = myStack.pop()
    expect(extracted).toEqual(2)
    expect(myStack.top).toEqual(1)
    expect(myStack.size).toEqual(1)
  })

  test("pop() - if element is not existing", () => {
    const myStack = new MyStack<number>()
    expect(myStack.top).toEqual(undefined)
    const extracted = myStack.pop()
    expect(extracted).toEqual(undefined)
    expect(myStack.size).toEqual(0)
    expect(myStack.top).toEqual(undefined)
  })

  test("pop() - until element to be nothing", () => {
    const myStack = new MyStack<number>()

    for (let value = 0; value < 4; value += 1) {
      myStack.push(value)
    }

    let value = 3
    while (myStack.size > 0) {
      const top = myStack.top
      const extracted = myStack.pop()
      expect(extracted).toEqual(top)
      expect(extracted).toEqual(value)
      value -= 1
    }

    expect(myStack.size).toEqual(0)
    expect(myStack.top).toEqual(undefined)
  })
})
