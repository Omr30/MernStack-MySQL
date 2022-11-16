import axios from 'axios'

const url = 'http://localhost:8080';

const getTasksRequest = async() => 
    await axios.get(`${url}/tasks`)


const createTaskRequest = async(task) => 
    await axios.post(`${url}/tasks`, task)

const deleteTaskRequest = async(id) =>
    await axios.delete(`${url}/tasks/${id}`)


const getTaskRequest = async(id) =>
    await axios.get(`${url}/tasks/${id}`)

const updateTaskRequest = async(id, newFields) =>
    await axios.put(`${url}/tasks/${id}`, newFields)

const toggleTaskDoneRequest = async(id, done) => {
    await axios.put(`${url}/tasks/${id}`, {
        done
    })
}

export {
    createTaskRequest,
    getTasksRequest,
    deleteTaskRequest,
    getTaskRequest,
    updateTaskRequest,
    toggleTaskDoneRequest
}