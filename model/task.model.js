import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [100, "Title cannot exceed 100 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    group: {
      type: String,
      default: "General",
      trim: true,
      maxlength: [50, "Group cannot exceed 50 characters"],
    },
    category: {
      type: String,
      default: "later",
      enum: ["urgent", "later", "assigned", "completed"],
      lowercase: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
