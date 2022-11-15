import { pool } from "../db.js";

export const  getTasks = async(req , res) => {
    try {
        const [result] = await pool.query('SELECT * FROM tasks');
        res.send(result);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const  getTask = async(req , res) => {
    const id = req.params.id;
    try {
        const [result] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    
        if(result.length === 0)
            return res.status(404).json({ message: "Task not found" });
    
        res.send(result[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const  createTask = async(req , res) => {
    const { title, description } = req.body;
    try {
        const [result] = await pool.query('INSERT tasks (title, description) VALUES (?, ?)', [title, description]);
        res.json({
            id: result.insertId,
            title,
            description
        })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const  updateTask = async(req , res) => {
    const id = req.params.id;
    try {
        const [resultUpdate] = await pool.query('UPDATE tasks SET ? WHERE id = ?', [req.body, id]);
        if (resultUpdate.affectedRows === 0) return res.status(404).json({
            message: "Tasks not found"
        })
    
        const [rows] = await pool.query('SELECT * FROM tasks WHERE id = ?', [id]);
    
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};

export const  deleteTask = async(req , res) => {
    const id = req.params.id;
    try {
        const [result] = await pool.query('DELETE FROM tasks WHERE id = ?', [id]);
        
        if( result.affectedRows === 0 ){
            return res.status(404).json({message: "Task not found"});
        }
    
        return res.status(204);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
};
