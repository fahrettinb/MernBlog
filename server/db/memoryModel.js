import mongoose from 'mongoose'

const memoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  creator: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
})

//Collection ismi yani hangi şemayı hangi koleksiyon ismi ile export ettik.
const Memory = mongoose.model('memo', memoSchema)

export default Memory
