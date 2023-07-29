import { Greeter } from './greeter'

describe('Greeter', () => {
  describe('#hello', () => {
    it('creates a greeting message', () => {
      const stubUser = {
        name: 'someUserName'
      }

      const greeter = new Greeter()
      const message = greeter.hello(stubUser)

      expect(message).toEqual('Hello someUserName')
    })
  })
})
