import Task from "../model/task.model.js";

export async function getAllTasks(req, res) {
  try {
    const tasks = await Task.find({});
    res.status(200).json({
      message: "All Data retrieved successfully",
      data: tasks,
    });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function getTaskById(req, res) {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Data retrieved successfully", data: task });
  } catch (error) {
    console.error("Error retrieving task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function addTask(req, res) {
  try {
    const { title, completed, group, category } = req.body;

    if (!title) {
      res.status(400).json({ message: "Title is required" });
      return;
    }

    const newTask = new Task({
      title,
      completed: completed || false,
      group: group || "General",
      category: category || "later",
    });

    const savedTask = await newTask.save();
    res
      .status(201)
      .json({ message: "Task added successfully", data: savedTask });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function updateTask(req, res) {
  try {
    const taskId = req.params.id;
    const { title, completed, group, category } = req.body;

    const updateData = {};
    if (title !== undefined) {
      updateData.title = title;
    }
    if (completed !== undefined) {
      updateData.completed = completed;
    }
    if (group !== undefined) {
      updateData.group = group;
    }
    if (category !== undefined) {
      updateData.category = category;
    }

    const updatedTask = await Task.findByIdAndUpdate(taskId, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedTask) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    res.status(200).json({
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function deleteTask(req, res) {
  try {
    const taskId = req.params.id;
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", data: deletedTask });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}
