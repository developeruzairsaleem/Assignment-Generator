
import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: [true, 'Please provide full name'],
  },
  universityEmail: {
    type: String,
    required: [true, 'Please provide your university email'],
    unique:true
  },

  personalEmail: {
    type: String,
    required: [true, 'Please provide your personal email'],
  },
  
  registrationNumber: {
    type: String,
    required: [true, 'Please provide your University Registration Number'],
  },

  program:{
    type: String,
    required:[true, "Please provide your program like BSAI-4B"]
  }

});

const User = mongoose.models.User || mongoose.model('User', UserSchema);


export default User