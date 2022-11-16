import { useEffect, useState } from "react"
import { getTaskRequest } from "../api/tasks.api"
import TaskCard from "../components/TaskCard"

const TasksPage = () => {

  const [tasks, setTasks] = useState([])

  useEffect(() => {

    async function loadTasks() {
      const response =  await getTaskRequest()
     setTasks(response.data);
     console.log(response.data)
    }

    loadTasks();

  }, [])

  return (
    <div>
      <h1>Tasks</h1>

      {
        tasks.map( task => (
          <TaskCard task={task} key={task.id} />
        ))
      }
    </div>
  )
}

export default TasksPage;