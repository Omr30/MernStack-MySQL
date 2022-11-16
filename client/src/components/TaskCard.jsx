const TaskCard = ({task}) => (
    <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <span>{task.done === 1 ? "✔️" : "❌"}</span>
        <span>{task.createAt}</span>
        <button>delete</button>
        <button>edit</button>
    </div>
)

export default TaskCard