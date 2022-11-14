import express from 'express';
import './config.js'
import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/tasks.routes.js';

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

app.listen(port, (
    console.log(`Server run port ${port}`)
))