import { User } from "./user"

export class Greeter {
  hello(user: User) {
    return "Hello " + user.name
  }
}

export interface IGreeter {
  hello(user: User): string
}
