import express from 'express';
import './config.js'
import indexRoutes from './routes/index.routes.js';

const app = express();
const port = process.env.PORT;

app.use(express.json())

app.use(indexRoutes)

app.listen(port, (
    console.log(`Server run port ${port}`)
))