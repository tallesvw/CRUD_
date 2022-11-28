import express, { json } from 'express';
import { router } from './routes';
import { db } from './database/db';

const app = express()
const port = 3000

app.use(json());
app.use(router);














app.listen(port, async () => {
    await db.sync();
    console.log(`App ${process.env.PROJECT_NAME} running at ${port}`)
});



