
export const  getTasks = (req , res) => {
    res.send('obteniendo tareas')
};

export const  getTask = (req , res) => {
    res.send('obteniendo una tarea')
};

export const  createTask = (req , res) => {
    res.send('creando tareas')
};

export const  updateTask = (req , res) => {
    res.send('actualizando tarea')
};

export const  deleteTask = (req , res) => {
    res.send('eliminando tarea')
};
