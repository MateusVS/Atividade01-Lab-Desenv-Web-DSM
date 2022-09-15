import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './config/routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.SERVER_PORT, () => console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`));
