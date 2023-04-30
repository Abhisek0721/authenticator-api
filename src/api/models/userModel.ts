import mongoose, {Schema, Types} from "mongoose";
import properties from "../../config/properties";
import jsonwebtoken from "jsonwebtoken";
import UserModelInterface from "../interfaces/userModelInterface";

const userSchema:Schema = new Schema<UserModelInterface>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email is already registered"],
    match: [
      /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
      "Please enter a valid email",
    ],
  },
  verify: {
    type: Boolean,
    default: false,
    required: false,
  }, // for verification of email
  companyName: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
    minlength: [6, "Password must be at least 6 characters"],
  },
  googleId: {
    type: String,
    required: false,
  },
  refreshToken: {
    type: String,
    required: false,
  }
});

export const getSignedJwtToken = (userId: Types.ObjectId):string => {
    const token = jsonwebtoken.sign({ id: userId }, properties.JWT_SECRET, {
        expiresIn: '24h',
    });
    return token;
}

const User = mongoose.model<UserModelInterface>("users", userSchema);

export default User;
