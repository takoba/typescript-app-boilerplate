import { describe, expect, it, vi } from 'vitest'
import App from '~/app'

describe('export const App', () => {
  it('return log when call `start()`', () => {
    // arrange
    global.console.log = vi.fn()

    // act
    const app = App()
    app.start()

    // assert
    expect(global.console.log).toHaveBeenCalledTimes(1)
    expect(global.console.log).toHaveBeenCalledWith('exec app.start()')
  })
})
