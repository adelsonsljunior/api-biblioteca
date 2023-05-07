import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreValidator from 'App/Validators/User/StoreValidator'
import UpdateValidator from 'App/Validators/User/UpdateValidator'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    const users = await User.all()
    return response.ok(users)
  }

  public async store({ request, response }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const user = await User.create(data)
    return response.status(201).json(user)
  }

  public async show({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ error: 'Usuário não encontrado' })
    }

    return response.ok(user)
  }

  public async update({ params, request, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ error: 'Usuário não encontrado' })
    }

    const data = await request.validate(UpdateValidator)
    user.merge(data)
    await user.save()
    return response.ok(user)
  }

  public async destroy({ params, response }: HttpContextContract) {
    const user = await User.find(params.id)

    if (!user) {
      return response.notFound({ error: 'Usuário não encontrado' })
    }

    await user.delete()
    return response.noContent()
  }
}
