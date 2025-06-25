

//using in memory arr as database for tasks

let tasks = [];
let currentId = 1;



export async function getAllTasks(req, res) {
  try {
    res.status(200).json({
      message: "All Data retrieved successfully",
      data: tasks ,
    });
  } catch (error) {
    console.error("Error retrieving tasks:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function getTaskById(req, res) {
  try {
    const taskId = parseInt(req.params.id, 10);
    const task = tasks.find((t) => t.id === taskId);

    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    res
      .status(200)
      .json({ message: "Data retrieved successfully", data: task});
  } catch (error) {
    console.error("Error retrieving task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function addTask(req, res) {
  try {
    const { title, completed } = req.body;

    if (!title) {
      res.status(400).json({ message: "Title is required" });
      return;
    }

    const newTask = {
      id: currentId++,
      title,
      completed: completed || false,
    };

    tasks.push(newTask);
    res
      .status(201)
      .json({ message: "Task added succcessfully", data: newTask });
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function updateTask(req, res) {
  try {
    const taskId = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    const { title, completed } = req.body;

    if (title !== undefined) {
      tasks[taskIndex].title = title;
    }
    if (completed !== undefined) {
      tasks[taskIndex].completed = completed;
    }

    res.status(200).json({
      message: "Task updated successfully",
      data: tasks[taskIndex],
    });
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}

export async function deleteTask(req, res) {
  try {
    const taskId = parseInt(req.params.id, 10);
    const taskIndex = tasks.findIndex((t) => t.id === taskId);

    if (taskIndex === -1) {
      res.status(404).json({ message: "Task not found" });
      return;
    }

    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal Server Error" });
    return;
  }
}
