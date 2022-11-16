import axios from 'axios'

const url = 'http://localhost:8080';

const getTaskRequest = async() => 
    await axios.get(`${url}/tasks`)


const createTaskRequest = async(task) => 
    await axios.post(`${url}/tasks`, task)

const deleteTaskRequest = async(id) =>
    await axios.delete(`${url}/tasks/${id}`)

export {
    createTaskRequest,
    getTaskRequest,
    deleteTaskRequest
}