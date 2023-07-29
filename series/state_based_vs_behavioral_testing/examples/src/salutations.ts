import { IGreeter, Greeter } from './greeter'
import { IMailer, Mailer } from './mailer'

export class Salutations {
  greeter: IGreeter
  mailer: IMailer

  constructor(greeter: IGreeter = new Greeter(), mailer: IMailer = new Mailer()) {
    this.greeter = greeter
    this.mailer = mailer
  }

  arrival(name: string): string {
    const user = { name: name }
    const greeting = this.greeter.hello(user)
    this.mailer.send(greeting)
    return greeting
  }
}
