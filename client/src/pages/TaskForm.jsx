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
        <Formik 
            initialValues={task}
            enableReinitialize = {true}
            onSubmit={async(values) => {
                if(params.id){
                    await updateTask(params.id, values)
                }else {
                    await createTask(values);
                }
                navigate('/');
            }}
        >
        {({handleChange, handleSubmit, values, isSubmitting}) => (
            <Form 
                onSubmit={handleSubmit}
                className='bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10'
            >
                <h1 className='text-xl font-bold uppercase text-center'>{
                    params.id ? "Edit Task" : "New Task"  
                }</h1>
                <label className='block'>title</label>
                <input
                    className='px-2 py-1 rounded-sm w-full'
                    type="text" 
                    name="title" 
                    placeholder="Write a title" 
                    onChange={handleChange}
                    value={values.title}
                />

                <label className='block'>description</label>
                <textarea
                    className='px-2 py-1 rounded-sm w-full'
                    name="description" 
                    rows="3" 
                    placeholder="Write a description"
                    onChange={handleChange}
                    value={values.description}
                ></textarea>

                <button
                    className='block bg-indigo-500 px-2 py-1 text-white w-full rounded-md'
                    disabled={isSubmitting}
                    type="submit" 
                >
                    {isSubmitting ? "Saving..." : "Save"}
                </button>

            </Form>
        )}
        </Formik>
    </div>
    )
}

export default TaskForm