import { observable, computed, action, makeObservable } from 'mobx'

export class User {
  @observable name: string = ''
  @observable surname: string = ''

  constructor() {
    makeObservable(this)
  }

  @action updateName(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  @computed get fullName() {
    return `${this.name} ${this.surname}`
  }
}

export default new User()
