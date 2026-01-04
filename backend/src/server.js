import express, { urlencoded } from 'express'
import cors from 'cors'
import 'dotenv/config'
const PORT = process.env.PORT || 3030

import gameRouter from './routes/gameRoutes.js';
import mapRouter from './routes/mapRoutes.js';
const app = express();

app.use(cors());

app.use(urlencoded({ extended: true }));
app.use(express.json());

app.use('/maps', mapRouter);
app.use('/', gameRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on port:${PORT}`);
})