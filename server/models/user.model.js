import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,  
    },
    credits:{
    type: Number,
    default: 100,
    min: 0
    },
    is_credit_available: {
    type: Boolean,
    default: true
    },
    notes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Note',
    default: []
    },
  },{timestamps: true});

  const User = mongoose.model('User', userSchema);
  export default User;