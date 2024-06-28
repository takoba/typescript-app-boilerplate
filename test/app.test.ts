import { describe, expect, it } from '@jest/globals'
import App from '../src/app'

describe('export const App', () => {
  it('return log when call `start()`', () => {
    // arrange
    global.console.log = jest.fn()

    // act
    const app = App()
    app.start()

    // assert
    expect(global.console.log).toHaveBeenCalledTimes(1)
    expect(global.console.log).toHaveBeenCalledWith('exec app.start()')
  })
})
