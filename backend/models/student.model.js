
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    age: {
      type: String,
      required: true,
    },
    rollNumber: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    webMail: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    course: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      required: true,
    },
    attendance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;
