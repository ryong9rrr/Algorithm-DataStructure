import MyQueue from "./MyQueue"

describe("Queue ADT test", () => {
  test("initialize", () => {
    const queue = new MyQueue()
    expect(queue.size).toEqual(0)
    expect(queue.peek).toEqual(undefined)
  })

  test("enqueue()", () => {
    const queue = new MyQueue()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    expect(queue.desc).toEqual("1 2 3")
    expect(queue.size).toEqual(3)
    expect(queue.peek).toEqual(1)
  })

  test("dequeue() : if front is nothing", () => {
    const queue = new MyQueue()
    expect(queue.dequeue()).toEqual(undefined)
    expect(queue.size).toEqual(0)
  })

  test("dequeue()", () => {
    const queue = new MyQueue()
    queue.enqueue(1)
    queue.enqueue(2)

    expect(queue.size).toEqual(2)
    expect(queue.peek).toEqual(1)
    expect(queue.dequeue()).toEqual(1)
    expect(queue.size).toEqual(1)
    expect(queue.peek).toEqual(2)
  })

  test("bad usage dequeue() : until head is nothing, check peek", () => {
    // peek is take value, so this usage is bad.
    const queue = new MyQueue()
    for (let value = 0; value < 5; value += 1) {
      queue.enqueue(value)
    }

    // if you want to dequeue() until queue is bin, but last value is 0, so result is your expect.
    while (queue.peek) {
      queue.dequeue()
    }

    // result is not undefined
    expect(queue.peek).toEqual(0)
  })

  test("good usage dequeue() : until head is nothing, check size", () => {
    const queue = new MyQueue()
    for (let value = 0; value < 5; value += 1) {
      queue.enqueue(value)
    }

    while (queue.size > 0) {
      queue.dequeue()
    }

    expect(queue.size).toEqual(0)
  })
})
