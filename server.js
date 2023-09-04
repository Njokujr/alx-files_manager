import express from 'express';
import router from './routes/index';

const port = parseInt(process.env.PORT, 10) || 5000;

const app = express();

<<<<<<< HEAD
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});

export default app;
=======
export default server;
>>>>>>> 7ac1a02f6e40b89c1c0e8db5098d731a02862cb5
