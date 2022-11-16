import express from 'express';
import cors from 'cors';
import './config.js'
import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import {fileURLToPath} from 'url';
import {dirname, join} from "path";

const app = express();
const port = process.env.PORT;
const _dirname = dirname(fileURLToPath(import.meta.url))

app.use(cors())
app.use(express.json())

app.use(indexRoutes)
app.use(taskRoutes)

app.use(express.static(join(_dirname, '../client/dist')));

app.listen(port, (
    console.log(`Server run port ${port}`)
))