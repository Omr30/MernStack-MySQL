import { pool } from "../db.js";

export const  getTasks = async(req , res) => {
    const [result] = await pool.query('SELECT * FROM tasks');
    res.send(result);
};

export const  getTask = async(req , res) => {
    const id = req.params.id;
    const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);

    if(result.length === 0)
        return res.status(404).json({ message: "Task not found" });

    res.send(result[0]);
};

export const  createTask = async(req , res) => {
    const { title, description } = req.body;
    const [result] = await pool.query('INSERT tasks (title, description) VALUES (?, ?)', [title, description]);
    res.json({
        id: result.insertId,
        title,
        description
    })
};

export const  updateTask = async(req , res) => {
    const id = req.params.id;
    const [resultUpdate] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, id]);
    if (resultUpdate.affectedRows === 0) return res.status(404).json({
        message: "Tasks not found"
    })

    const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);

    res.send(rows[0]);
};

export const  deleteTask = async(req , res) => {
    const id = req.params.id;
    const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
    
    if( result.affectedRows === 0 ){
        return res.status(404).json({message: "Task not found"});
    }

    return res.status(204);
};
