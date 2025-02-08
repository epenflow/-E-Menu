import User from '#models/user'
import { storeUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ bouncer, request }: HttpContext) {
    await bouncer.with('UserPolicy').denies('isAdmin')

    const page = request.input('page', 1)
    const limit = request.input('limit', 10)

    const user = await User.query().select('*').paginate(page, limit)

    return user
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, bouncer }: HttpContext) {
    await bouncer.with('UserPolicy').denies('isAdmin')

    const data = await storeUserValidator.validate(request.all())
    const user = await User.create(data)

    return user.toJSON()
  }

  /**
   * Show individual record
   */
  async show({ params, bouncer }: HttpContext) {
    await bouncer.with('UserPolicy').denies('isAdmin')

    const user = await User.findOrFail(params.id)

    return user.toJSON()
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, bouncer }: HttpContext) {
    await bouncer.with('UserPolicy').denies('isAdmin')

    const data = await updateUserValidator.validate(request.all())
    const user = await User.findOrFail(params.id)

    return user.merge(data)
  }

  /**
   * Delete record
   */
  async destroy({ params, bouncer }: HttpContext) {
    await bouncer.with('UserPolicy').denies('isAdmin')

    const user = await User.findOrFail(params.id)
    await user.delete()

    return {
      success: [
        {
          message: 'Ok',
          status: true,
        },
      ],
    }
  }
}
