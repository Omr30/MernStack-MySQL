import {Router} from 'express';
import { pool } from '../db.js';

const router = Router();

router.get('/ping', async(req, res) => {
    const [rows] = await pool.query('SELECT 2 + 2 as result')

    res.send(rows[0])
})

export default router;