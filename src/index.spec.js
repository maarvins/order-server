const imported = require("./status");



describe ('Testing my function imported', () => {
  it('Return an object with a boolean value atribute', () => {
    expect(imported.run()).toStrictEqual({ running: expect.any(Boolean) })
  })
})