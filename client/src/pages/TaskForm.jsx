import {Form, Formik} from 'formik'
import { useTasks } from '../context/TaskContext';
import {useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

const TaskForm = () => {

    const {createTask, getTask, updateTask} = useTasks()
    const [task, setTask] = useState({
        title: "",
        description: ""
    })

    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(params.id) {
            const loadTask = async() => {
                const task = await getTask(params.id)
                setTask({
                    title: task.title,
                    description: task.description
                });
            }
            loadTask();
        }
    })

    return (
    <div>
        <h1>{
              params.id ? "Edit Task" : "New Task"  
        }</h1>
        <Formik 
            initialValues={task}
            enableReinitialize = {true}
            onSubmit={async(values) => {
                if(params.id){
                    await updateTask(params.id, values)
                    navigate('/');
                }else {
                    await createTask(values);
                }
            }}
        >
        {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form onSubmit={handleSubmit}>
                <label>title</label>
                <input 
                    type="text" 
                    name="title" 
                    placeholder="Write a title" 
                    onChange={handleChange}
                    value={values.title}
                />

                <label>description</label>
                <textarea 
                    name="description" 
                    rows="3" 
                    placeholder="Write a description"
                    onChange={handleChange}
                    value={values.description}
                ></textarea>

                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Saving..." : "Save"}
                </button>

            </Form>
        )}
        </Formik>
    </div>
    )
}

export default TaskForm