import { BasePolicy } from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'

export default class UserPolicy extends BasePolicy {
  public async invoke(user1: User, user2: User) {
    return user1.id === user2.id
  }

  public async index(user: User) {
    return user.isAdmin
  }
}
