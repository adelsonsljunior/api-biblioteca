import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {
  public async index({}: HttpContextContract) {
    const users = await User.all()
    return users
  }

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'email', 'password', 'isAdmin'])
    const user = await User.create(data)
    return user
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound()
    }

    return user
  }

  public async update({ params, request, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound()
    }

    const data = request.only(['name', 'email', 'password', 'isAdmin'])
    console.log(data)
    user.merge(data)
    await user.save()
    return response.ok(user)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound()
    }

    await user.delete()
    return response.noContent()
  }
}
