import { Greeter } from './greeter'
import { Salutations } from './salutations'
import { IMailer, Mailer } from './mailer'

describe('Salutations', () => {
  describe('#arrival', () => {
    describe('mockist/behavioral', () => {
      // Behavioral Test
      it('collaborates with the Greeters hello method', () => {
        let mockGreeter = {
          hello: jest.fn().mockReturnValue('something someUsername')
        }

        let mockMailer = {
          send: jest.fn()
        }

        const salutations = new Salutations(mockGreeter, mockMailer)
        salutations.arrival('hoopty')

        expect(mockGreeter.hello).toHaveBeenCalledWith({ name: 'hoopty' })
      })

      // Behavioral Test
      it('collaborates with the Mailers send method', () => {
        let mockGreeter = {
          hello: jest.fn().mockReturnValue('something someUsername')
        }

        let mockMailer = {
          send: jest.fn()
        }

        const salutations = new Salutations(mockGreeter, mockMailer)
        salutations.arrival('hoopty')

        expect(mockMailer.send).toHaveBeenCalledWith('something someUsername')
      })

      // State-based/Classical assertion but used to verify that the return value of the Greater.hello method is returned from the arrival() method.
      // This is technically a State-based test from an assertion standpoint but a Behavioral test from the standpoint of the intention of the test. 
      it('returns the result of the greeter hello method', () => {
        let stubGreeter = {
          hello: jest.fn().mockReturnValue('something someUsername')
        }

        let stubMailer = {
          send: jest.fn()
        }

        const salutations = new Salutations(stubGreeter, stubMailer)
        const message = salutations.arrival('hoopty')

        expect(message).toEqual('something someUsername')
      })
    })

    describe('classical/state based', () => {
      describe('classical/state based w/ Spy', () => {
        describe('when given user with name Bob', () => {
          // State Based Test w/Spy
          it('sends the greeting email & returns a greeting for Bob', () => {
            const mailer = new Mailer()
            const spyMailer = jest.spyOn(mailer, 'send').mockReturnValue(undefined)
            // Note: If don't use mockReturnValue() here then it still executes the original send function
            const greeter = new Greeter()
            const salutations = new Salutations(greeter, mailer)
            const message = salutations.arrival('Bob')

            expect(spyMailer).toHaveBeenCalledWith('Hello Bob')
            expect(message).toEqual('Hello Bob')
          })
        })
      })

      describe('classical/state based w/ classic fake', () => {
        describe('when given user with name Cindy', () => {
          // State Based Test w/Classic Fake
          it('sends the greeting email & returns a greeting for Cindy', () => {
            class FakeMailer implements IMailer {
              messages: Array<string>
              constructor() {
                this.messages = new Array<string>()
              }

              send(message: string): void {
                this.messages.push(message)
              }
            }

            const mailer = new FakeMailer()
            const greeter = new Greeter()
            const salutations = new Salutations(greeter, mailer)
            const message = salutations.arrival('Cindy')

            expect(message).toEqual('Hello Cindy')
            expect(mailer.messages.length).toEqual(1)
            expect(mailer.messages[0]).toEqual('Hello Cindy')
          })
        })
      })

      describe('classical/state based w/ mocking effectful collaborator', () => {
        describe('when given user with name James', () => {
          // State Based Test w/Classic Fake
          it('sends the greeting email & returns a greeting for James', () => {
            const mockMailer = {
              send: jest.fn()
            }

            const greeter = new Greeter()
            const salutations = new Salutations(greeter, mockMailer)
            const message = salutations.arrival('James')

            expect(mockMailer.send).toHaveBeenCalledWith('Hello James')
            expect(message).toEqual('Hello James')
          })
        })
      })
    })
  })
})
