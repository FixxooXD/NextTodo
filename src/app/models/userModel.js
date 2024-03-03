import mongoose from "mongoose";

const userSchema = ({
  userName: {
    type: String,
    required: [true, "Provide a username"],
  },
  email: {
    type: String,
    required: [true, "Provide a Mail id"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Provide a Password"],
  },
  isVerfied: {
    type: Boolean,
    default: false,
  },
  todo: {
    type: Array,
    default: [] // Default value is an empty array
  },
  // todo: [
  //   {
  //     task: {
  //       type: String,
  //     },
  //     isEditing: {
  //       type: Boolean,
  //     },
  //     isComplete: {
  //       type: Boolean,
  //     },
  //   },
  // ],
  forgotPasswordToken: String,
  forgetPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User; 
