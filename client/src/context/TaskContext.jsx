import { createContext, useContext, useState } from 'react';
import { createTaskRequest, deleteTaskRequest, getTaskRequest, getTasksRequest, updateTaskRequest } from '../api/tasks.api';

const TaskContext = createContext();

const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context) {
        throw new Error("useTasks must be used within a TaskContextProvider")
    }
    return context;
}

const TaskContextProvider = ({children}) => {

    const [tasks, setTasks] = useState([]);

    async function loadTasks() {
        const response =  await getTasksRequest()
       setTasks(response.data);
    }

    const deleteTask = async(id) => {
        try{
            await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id))
        } catch(error) {
            console.error(error);
        }
    }

    const createTask = async(values) => {
        try{
            const response = await createTaskRequest(values)
            setTasks([...tasks, response.data]);
        } catch (error) {
            console.error(error)
        }
    }

    const getTask = async(id) => {
        try{
            const response = await getTaskRequest(id)
            return response.data
        }catch(error){
            console.error(error)
        }
    }

    const updateTask = async(id, newFields) => {
        try {
            await updateTaskRequest(id, newFields);
        } catch (error) {
            console.error(error);
        }
    }

    return(
        <TaskContext.Provider 
            value={{ tasks, loadTasks, deleteTask, createTask, getTask, updateTask }}
        > 
            {children} 
        </TaskContext.Provider>
    )
}

export {
    TaskContext,
    TaskContextProvider,
    useTasks
}