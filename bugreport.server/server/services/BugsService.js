
import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BugsService {
  async getAllBugs(query) {
    const data = await dbContext.Bugs.find(query)
      .populate('creator', 'name picture')
    return data
  }

  async getBugById(id) {
    const data = await dbContext.Bugs.findById(id)
      .populate('creator', 'name picture')
    if (!data) {
      throw new BadRequest('Invalid Id')
    }
    return data
  }

  async createBug(body) {
    return await dbContext.Bugs.create(body)
  }

  async editBug(body) {
    const bug = await dbContext.Bugs.findOneAndUpdate({ _id: body.id, creatorId: body.creatorId, closed: false }, body, { new: true })
    if (!bug) {
      throw new BadRequest('Invalid request')
    }
    return bug
  }

  async deleteBug(id, userId) {
    const data = await dbContext.Bugs.findOne({ _id: id, creatorId: userId })
    if (!data) {
      throw new BadRequest('Invalid Id - Delete')
    }
    if (data.closed === false) {
      data.closed = true
      await data.save()
    }
    return data
  }
}
export const bugsService = new BugsService()
