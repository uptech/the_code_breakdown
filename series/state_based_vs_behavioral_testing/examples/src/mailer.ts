export interface IMailer {
  send(message: string): void
}

export class Mailer {
  send(message: string): void {
    // Throw an Exception here as I want to simulate an effectful action and I want it to be visible in tests
    // when it is not mocked/stubbed. Normally, effectful actions don't cause tests to fail like this. Genverally,
    // the simply have their effect. In the case of a Mailer it would actually send off an email and the test
    // would have no idea. 
    throw new Error("Simulating effectul action of sending the email")
  }
}
