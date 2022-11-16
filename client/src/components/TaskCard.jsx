import { useTasks } from "../context/TaskContext";
import {useNavigate} from 'react-router-dom';

const TaskCard = ({task}) => {

    const {deleteTask} = useTasks();
    const navigate = useNavigate()

    return(
        <div>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span>{task.done === 1 ? "✔️" : "❌"}</span>
            <span>{task.createAt}</span>
            <button onClick={() => deleteTask(task.id)}>delete</button>
            <button onClick={() => navigate(`/edit/${task.id}`)}>edit</button>
        </div>
    )
}

export default TaskCard