import connectDB from '../utils/connect'
import { requireUser } from '../middleware/authenticate'
import MessageModel from '../models/message.model'

// find the user message services
export async function findMessageRoom(accessToken: string) {
  try {
    await connectDB()
    const user = await requireUser(accessToken)
    const userID = user?.id

    const messageRoom = await MessageModel.find({
      $or: [
        {
          'members.candidate': `${userID}`,
        },
        {
          'members.employer': `${userID}`,
        },
      ],
    })
      .populate('job', ['jobTitle', '_id'])
      .populate('members.candidate', ['fullName', 'avatar', '_id'])
      .populate('members.employer', ['fullName', '_id', 'avatar'])
      .lean(true)

    return messageRoom
  } catch (e) {
    throw e
  }
}
